import json

repos = {
  'Media-Vault': { 'desc': 'Private Cloud (NAS) with Nextcloud and smart IoT photo capture. Uses Cloudflare Tunnels (Zero Trust).', 'stars': 2, 'langs': {'Shell': 42.3, 'Python': 24.8, 'HTML': 20.0, 'C++': 12.9} },
  'PIR-Detector': { 'desc': 'Intelligent IoT monitoring system (ESP32). Detects movement, captures images, sends alerts to Discord.', 'stars': 2, 'langs': {'HTML': 46.1, 'Python': 32.1, 'C++': 21.8} },
  'Takeda-App': { 'desc': 'Intuitive system analysis, cleaning, and optimization tool built with Electron. Keep your computer running smoothly.', 'stars': 0, 'langs': {'JavaScript': 79.4, 'CSS': 16.7, 'HTML': 3.9} },
  'Auto-Wallet': { 'desc': 'A personal finance Discord bot tracking expenses with natural language and monthly limits.', 'stars': 0, 'langs': {'TypeScript': 100.0} },
  'GitHub-Contribution-Graph': { 'desc': 'A custom graph mapping commits by time of day visualizing your circadian coding rhythm.', 'stars': 0, 'langs': {'JavaScript': 100.0} },
  'GitHub-Stats-Card': { 'desc': 'Dynamic GitHub statistics card displaying most-used languages and recent activity.', 'stars': 0, 'langs': {'JavaScript': 100.0} }
}
colors = {'Shell': 'var(--color-green)', 'Python': 'var(--color-blue)', 'HTML': '#e34c26', 'C++': '#f34b7d', 'JavaScript': '#f1e05a', 'CSS': '#563d7c', 'TypeScript': '#3178c6'}

html = '<div class="projects-grid">\n'
for name, data in repos.items():
    badge_lang = list(data['langs'].keys())[0]
    
    html += f'''
              <a href="https://github.com/hugotakeda/{name}" target="_blank" class="project-card">
                <div class="card-header">
                  <span class="project-name text-pink">{name}</span>
                </div>
                <div class="project-desc" data-i18n="repo-{name.lower().replace('-', '')}">{data['desc']}</div>
                
                <!-- Languages Breakdown -->
                <div class="lang-breakdown">
                  <div class="lang-progress-bar">'''
    
    for lang, pct in data['langs'].items():
        html += f'\n                    <span class="lang-segment" style="width: {pct}%; background-color: {colors.get(lang, "#ccc")}"></span>'
    
    html += '''
                  </div>
                  <div class="lang-legend">'''
    
    for lang, pct in data['langs'].items():
        html += f'\n                    <span class="legend-item"><span class="legend-dot" style="background-color: {colors.get(lang, "#ccc")}"></span><span class="legend-name">{lang}</span> <span class="legend-pct">{pct}%</span></span>'
        
    html += f'''
                  </div>
                </div>
                <div class="project-stats">★ {data['stars']}</div>
              </a>'''

html += '\n            </div>'

with open('grid.html', 'w', encoding='utf-8') as f:
    f.write(html)
