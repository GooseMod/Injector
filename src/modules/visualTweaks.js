let obj = {
  onImport: async function() {
    this.logger.debug('visualTweaks', 'Enabling Visual Tweaks');
    
    this.tweaks = {
      'removeHelpButton': true,
      'darkerMode': true,
      'darkestMode': false
    };

    let sheet = window.document.styleSheets[0];
    sheet.insertRule(`body.theme-darker {
    --background-primary: #000;
    --background-secondary: #111;
    --background-secondary-alt: #000;
    --background-tertiary: #222;

    --channeltextarea-background: #111;
    }`, sheet.cssRules.length);

    sheet.insertRule(`html > body.theme-darkest {
    --background-primary: #000;
    --background-secondary: #000;
    --background-secondary-alt: #000;
    --background-tertiary: #000;

    --channeltextarea-background: #111;
    }`, sheet.cssRules.length);

    
    let tweakFunctions = {
      'removeHelpButton': {
        enable: () => {
          document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'none';
        },
        
        disable: () => {
          document.querySelector('a[href="https://support.discord.com"] > div[role="button"]').parentElement.style.display = 'flex';
        }
      },

      'darkerMode': {
        enable: () => {
          document.body.classList.add('theme-darker');
        },

        disable: () => {
          document.body.classList.remove('theme-darker');
        }
      },
      'darkestMode': {
        enable: () => {
          document.body.classList.add('theme-darkest');
        },

        disable: () => {
          document.body.classList.remove('theme-darkest');
        }
      }
    };
    
    this.enableTweak = (tweakName) => {
      tweakFunctions[tweakName].enable();

      this.tweaks[tweakName] = true;
    };
    
    this.disableTweak = (tweakName) => {
      tweakFunctions[tweakName].disable();

      this.tweaks[tweakName] = false;
    };
    
    this.setTweak = (tweakName, value) => {
      if (value === true) {
        this.enableTweak(tweakName);
      } else {
        this.disableTweak(tweakName);
      }
    };
    
    for (let t in this.tweaks) {
      if (this.tweaks[t] === true) this.enableTweak(t);
    }
  },
  
  onLoadingFinished: async function() {
    this.settings.createItem('Visual Tweaks', [
      {
        type: 'header',
        text: 'Themes'
      },
      {
        type: 'toggle',
        text: 'Darker Mode',
        onToggle: (c) => { this.setTweak('darkerMode', c); },
        isToggled: () => this.tweaks['darkerMode']
      },
      {
        type: 'toggle',
        text: 'Darkest Mode',
        onToggle: (c) => { this.setTweak('darkestMode', c); },
        isToggled: () => this.tweaks['darkestMode']
      },

      {
        type: 'header',
        text: 'Individual Minor Tweaks'
      },
      {
        type: 'toggle',
        text: 'Hide Help Button',
        onToggle: (c) => { this.setTweak('removeHelpButton', c); },
        isToggled: () => this.tweaks['removeHelpButton']
      }
    ]);
  },
  
  logRegionColor: 'darkred'
};

obj