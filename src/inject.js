(async function () {
  this.version = '0.5.0';
  this.versionIteration = 110;

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  this.logger = {
    regionColors: {
      'import': 'rgb(100, 0, 0)'
    },

    debug: (region, ...args) => {
      let parentRegion = region.split('.')[0];
      console.log(`%cGooseMod%c %c${region}`, 'border: 1px solid white; padding: 2px; background-color: black; color: white', 'background-color: none', `border: 1px solid white; padding: 2px; background-color: ${this.logger.regionColors[parentRegion] || (this.modules[parentRegion] && this.modules[parentRegion].logRegionColor) || 'rgb(0, 0, 0)'}; color: white`, ...(args));
    }
  };

  console.log(`%cGooseMod%c v%c${this.version}%c-%c${this.versionIteration}`, 'border: 1px solid white; padding: 2px; background-color: black; color: white', 'background-color: none', 'color: lightgreen', 'color: none', 'color: salmon');

  // Settings UI stuff

  this.confirmDialog = (buttonText, title, description) => {
    return new Promise((res) => {
    //Making the div boxes to house the stuff
    let confirmELContainer = document.createElement('div');
    confirmELContainer.classList.add('layerContainer-yqaFcK');

    let confirmELLayer = document.createElement('div');
    confirmELLayer.classList.add('layer-2KE1M9');

    let confirmEL = document.createElement('div');
    confirmEL.classList.add("focusLock-Ns3yie");
    confirmEL.setAttribute('role', 'dialog');
    confirmEL.setAttribute('aria-label', title);
    confirmEL.setAttribute('tabindex', '-1');
    confirmEL.setAttribute('aria-model', 'true');

    let confirmELRoot = document.createElement('div');
    confirmELRoot.classList.add("root-1gCeng", "small-3iVZYw", "fullscreenOnMobile-1bD22y");
    confirmELRoot.style.opacity = '1';
    confirmELRoot.style.transform = 'scale(1)';

    //Header stuff
    let confirmELHeaderDiv = document.createElement('div');
    confirmELHeaderDiv.classList.add('flex-1xMQg5', 'flex-1O1GKY', 'horizontal-1ae9ci', 'horizontal-2EEEnY', 'flex-1O1GKY', 'directionRow-3v3tfG', 'justifyStart-2NDFzi', 'alignCenter-1dQNNs', 'noWrap-3jynv6', 'header-1TKi98');
    confirmELHeaderDiv.style.flex = '0 0 auto';

    let confirmElHeaderH = document.createElement('h4');
    confirmElHeaderH.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "title-3sZWYQ", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5");
    confirmElHeaderH.textContent = title;

    //Body stuff
    let confirmELBody = document.createElement('div');
    confirmELBody.classList.add('content-1LAB8Z', 'content-mK72R6', 'thin-1ybCId', 'scrollerBase-289Jih');
    confirmELBody.setAttribute('dir', 'ltr');
    confirmELBody.style.overflow = 'hidden scroll';
    confirmELBody.style.paddingRight = '8px';

    let confirmELBodyText = document.createElement('div')
    confirmELBodyText.classList.add('colorStandard-2KCXvj', 'size16-1P40sf')
    confirmELBodyText.textContent = description;

    let confirmELBodyWhitespace = document.createElement('div');
    confirmELBodyWhitespace.setAttribute('aria-hidden', 'true');
    confirmELBodyWhitespace.style.position = 'absolute';
    confirmELBodyWhitespace.style.pointerEvents = 'none';
    confirmELBodyWhitespace.style.minHeight = '0px';
    confirmELBodyWhitespace.style.minWidth = '1px';
    confirmELBodyWhitespace.style.flex = '0 0 auto';
    confirmELBodyWhitespace.style.height = '20px';

    //Button stuff
    let confirmELButtonsDiv = document.createElement('div');
    confirmELButtonsDiv.classList.add('flex-1xMQg5', 'flex-1O1GKY', 'horizontalReverse-2eTKWD', 'horizontalReverse-3tRjY7', 'flex-1O1GKY', 'directionRowReverse-m8IjIq', 'justifyStart-2NDFzi', 'alignStretch-DpGPf3', 'noWrap-3jynv6', 'footer-2gL1pp');

    let confirmELButtonsSubmit = document.createElement('button');
    confirmELButtonsSubmit.type = 'submit';
    confirmELButtonsSubmit.classList.add('button-38aScr', 'lookFilled-1Gx00P', 'colorRed-1TFJan', 'sizeMedium-1AC_Sl', 'grow-q77ONN');

    let confirmELButtonsSubmitDiv = document.createElement('div');
    confirmELButtonsSubmitDiv.classList.add('contents-18-Yxp');
    confirmELButtonsSubmitDiv.textContent = buttonText;

    let confirmELButtonsCancel = document.createElement('button');
    confirmELButtonsCancel.type = 'button';
    confirmELButtonsCancel.classList.add('button-38aScr', 'lookLink-9FtZy-', 'colorPrimary-3b3xI6', 'sizeMedium-1AC_Sl', 'grow-q77ONN');

    let confirmELButtonsCancelDiv = document.createElement('div');
    confirmELButtonsCancelDiv.classList.add('contents-18-Yxp');
    confirmELButtonsCancelDiv.textContent = 'Cancel';

    //Misc
    let confirmELDimBackgroundDiv = document.createElement('div');
    confirmELDimBackgroundDiv.classList.add('backdropWithLayer-3_uhz4');
    confirmELDimBackgroundDiv.style.opacity = '0.85';
    confirmELDimBackgroundDiv.style.backgroundColor = 'rgb(0, 0, 0)';
    confirmELDimBackgroundDiv.style.transform = 'translateZ(0px)';

    //Add all the elements to the document
    //Appending misc
    confirmELContainer.appendChild(confirmELDimBackgroundDiv);

    //Appending root elements
    confirmELContainer.appendChild(confirmELLayer);
    confirmELLayer.appendChild(confirmEL);
    confirmEL.appendChild(confirmELRoot);

    //Appending headers
    confirmELRoot.appendChild(confirmELHeaderDiv);
    confirmELHeaderDiv.appendChild(confirmElHeaderH);

    //Appending body
    confirmELRoot.appendChild(confirmELBody);
    confirmELBody.appendChild(confirmELBodyText);
    confirmELBody.appendChild(confirmELBodyWhitespace);

    //Appending buttons
    confirmELRoot.appendChild(confirmELButtonsDiv);

    confirmELButtonsDiv.appendChild(confirmELButtonsSubmit);
    confirmELButtonsDiv.appendChild(confirmELButtonsCancel);
    confirmELButtonsSubmit.appendChild(confirmELButtonsSubmitDiv);
    confirmELButtonsCancel.appendChild(confirmELButtonsCancelDiv);

    //Inserting element into document
    document.getElementById('app-mount').insertBefore(confirmELContainer, null);

    //Making it function
    confirmELButtonsSubmit.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();

      res(true);
    };

    confirmELButtonsCancel.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();

      res(false);
    };

    confirmELDimBackgroundDiv.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();
    };

    document.querySelector('div[aria-label="Close"]').onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();
    };
    });
  };

  let settingsButtonEl = document.querySelector('button[aria-label="User Settings"]');

  let settingsLayerEl, settingsSidebarEl, settingsMainEl, settingsClasses;

  this.settings = {
    items: [],

    createItem: (panelName, content) => {
      this.settings.items.push(['item', panelName, content]);
    },

    createHeading: (headingName) => {
      this.settings.items.push(['heading', headingName]);
    },

    createSeparator: () => {
      this.settings.items.push(['separator']);
    },

    createFromItems: () => {
      for (let i of this.settings.items) {
        switch (i[0]) {
          case 'item':
            this.settings._createItem(i[1], i[2]);
            break;
          case 'heading':
            this.settings._createHeading(i[1]);
            break;
          case 'separator':
            this.settings._createSeparator();
            break;
        }
      }
    },

    _createItem: (panelName, content) => {
      let parentEl = document.createElement('div');

      let headerEl = document.createElement('h2');
      headerEl.textContent = `${panelName} ${content[0]}`;

      headerEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'h2-2gWE-o', 'title-3sZWYQ', 'defaultColor-1_ajX0', 'defaultMarginh2-2LTaUL');

      parentEl.appendChild(headerEl);

      let contentEl = document.createElement('div');
      contentEl.className = 'children-rWhLdy';

      parentEl.appendChild(contentEl);

      let i = 0;
      for (let e of content.slice(1)) {
        let el;

        switch (e.type) {
          case 'header':
            el = document.createElement('h2');

            if (i !== 0) {
              el.classList.add('marginTop20-3TxNs6');
            }

            el.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'h5-18_1nd', 'title-3sZWYQ', 'marginBottom8-AtZOdT');

            el.textContent = e.text;
            break;

          case 'toggle':
            el = document.createElement('div');

            el.classList.add('marginBottom20-32qID7');

            let txtEl = document.createElement('span');
            txtEl.classList.add('titleDefault-a8-ZSr', 'title-31JmR4');

            txtEl.style.float = 'left';

            txtEl.textContent = e.text;

            let checked = e.isToggled();

            let checkedClass = 'valueChecked-m-4IJZ';
            let uncheckedClass = 'valueUnchecked-2lU_20';

            let toggleEl = document.createElement('div');
            toggleEl.classList.add('flexChild-faoVW3', 'switchEnabled-V2WDBB', 'switch-3wwwcV', checked ? checkedClass : uncheckedClass, 'value-2hFrkk', 'sizeDefault-2YlOZr', 'size-3rFEHg', 'themeDefault-24hCdX');

            toggleEl.onclick = () => {
              checked = !checked;

              if (checked) {
                toggleEl.classList.add(checkedClass);
                toggleEl.classList.remove(uncheckedClass);
              } else {
                toggleEl.classList.remove(checkedClass);
                toggleEl.classList.add(uncheckedClass);
              }

              e.onToggle(checked, el);
            };

            toggleEl.style.float = 'right';

            el.appendChild(txtEl);
            el.appendChild(toggleEl);

            let dividerEl = document.createElement('div');

            dividerEl.classList.add('divider-3573oO', 'dividerDefault-3rvLe-');
            dividerEl.style.marginTop = '45px';

            el.appendChild(dividerEl);

            break;

          case 'button':
            el = document.createElement('button');

            el.classList.add('button-38aScr', 'lookFilled-1Gx00P', 'colorBrand-3pXr91', 'sizeSmall-2cSMqn', 'grow-q77ONN');

            let contentsEl = document.createElement('div');

            contentsEl.classList.add('contents-18-Yxp');

            contentsEl.textContent = e.text;

            el.appendChild(contentsEl);

            el.onclick = e.onclick;

            break;
        }

        contentEl.appendChild(el);

        i++;
      }

      let el = document.createElement('div');

      el.classList.add(settingsClasses['item']);
      el.classList.add(settingsClasses['themed']);

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');

      el.innerText = panelName;

      el.onclick = async () => {
        if (panelName === 'Uninstall') {
          if (await this.confirmDialog('Uninstall', 'Uninstall GooseMod', 'Are you sure you want to uninstall GooseMod? This is a quick uninstall, it may leave some code behind but there should be no remaining noticable changes.')) {
            this.settings.close();

            this.remove();
          }

          return; 
        }

        setTimeout(() => {
          settingsMainEl.firstChild.innerHTML = '';
          settingsMainEl.firstChild.appendChild(parentEl);

          for (let e of settingsSidebarEl.children) {
            e.classList.remove(settingsClasses['selected']);
          }

          el.classList.add(settingsClasses['selected']);
        }, 10);
      };

      settingsSidebarEl.addEventListener('click', () => {
        if (this.removed === true) return;

        el.classList.remove(settingsClasses['selected']);
      });

      settingsSidebarEl.appendChild(el);
    },

    _createHeading: (headingName) => {
      let el = document.createElement('div');
      el.className = settingsClasses['header'];

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');

      el.innerText = headingName;

      settingsSidebarEl.appendChild(el);
    },

    _createSeparator: () => {
      let el = document.createElement('div');
      el.className = settingsClasses['separator'];

      settingsSidebarEl.appendChild(el);
    },

    close: () => {
      document.querySelector('div[aria-label="Close"]').click(); // Close settings via clicking the close settings button
    },

    open: () => {
      settingsButtonEl.click();
    }
  };

  settingsButtonEl.addEventListener('click', async () => {
    if (this.removed) return;

    await sleep(10);

    settingsLayerEl = document.querySelector('div[aria-label="USER_SETTINGS"]');

    settingsSidebarEl = settingsLayerEl.querySelector('nav > div');

    let versionEl = document.createElement('div');
    versionEl.classList.add('colorMuted-HdFt4q', 'size12-3cLvbJ');

    versionEl.textContent = `GooseMod ${this.version}-${this.versionIteration}`;

    settingsSidebarEl.lastChild.appendChild(versionEl);

    settingsMainEl = settingsLayerEl.querySelector('main');

    //settingsButtonEl = document.querySelector('button[aria-label="User Settings"]');

    settingsClasses = {};

    for (let e of settingsSidebarEl.children) {
      for (let c of e.classList) {
        let name = c.split('-')[0];

        if (settingsClasses[name] === undefined) {
          settingsClasses[name] = c;
        }
      }
    }

    this.settings.createFromItems();
  });

  this.settings.createSeparator();
  this.settings.createHeading('GooseMod');

  this.modules = {};

  const ab2str = (buf) => { // ArrayBuffer (UTF-8) -> String
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  this.importModules = async (files) => {
    this.logger.debug('import', 'Looping through files');

    for (let f of files) {
      let field = f.filename.split('.').slice(0, -1).join('.'); // Get name of module via filename (taking away the file extension)

      this.logger.debug('import', `Importing module: "${field}"`);
      
      let settingItem = this.settings.items.find((x) => x[1] === 'Manage Modules');

      if (this.modules[field] !== undefined) {
        this.logger.debug(`import.load.module.${field}`, 'Module already imported, removing then installing new version');

        await this.modules[field].remove();

        settingItem[2].splice(settingItem[2].indexOf(settingItem[2].find((x) => x.text === `${this.modules[field].name} (${this.modules[field].version})`)), 1);
      }

      this.modules[field] = eval(ab2str(f.data)); // Set this.modules.<module_name> to the return value of the module (an object containing handlers)

      this.logger.debug(`import.load.module.${field}`, `Evaled module JS`);

      this.bindHandlers(this.modules[field]); // Bind all handlers to module parent / returned object from module code

      this.logger.debug(`import.load.module.${field}`, `Binded handlers`);

      await this.modules[field].onImport(); // Run the module's onImport handler

      this.logger.debug(`import.load.module.${field}`, `Ran onImport()`);

      let toggleObj = {
        type: 'toggle',
        text: `${this.modules[field].name} (${this.modules[field].version})`,
        onToggle: (c, el) => {
          this.modules[field].remove();
          settingItem[2].splice(settingItem[2].indexOf(toggleObj), 1);

          [...settingsSidebarEl.children].find((x) => x.textContent === this.modules[field].name).remove();

          el.remove();

          delete this.modules[field];
        },
        isToggled: () => true
      };

      settingItem[2].push(toggleObj);

      this.logger.debug(`import.load.module.${field}`, `Added to Modules setting page`);
    }

    this.logger.debug('import', 'Imported all files');
  };

  this.bindHandlers = (handlers) => {
    for (let p in handlers) {
      if (handlers.hasOwnProperty(p) && typeof handlers[p] === 'function') {
        handlers[p] = handlers[p].bind(this);
      }
    }

    return handlers;
  };

  this.getModuleFiles = async () => { // Ask for module files (one by one due to Discord restraint) until no file is chosen
    this.logger.debug('import.fileask', 'Asking for files');

    let allFiles = [];

    while (true) {
      let files = await DiscordNative.fileManager.openFiles(); // Ask for file (singular)

      if (files.length === 0) { // If no file, stop asking for files
        break;
      }

      allFiles.push(files[0]); // Add file to files array
    }

    this.logger.debug('import.fileask', 'Finished asking for files');

    return allFiles;
  };

  this.importModulesFull = async () => {
    let files = await this.getModuleFiles();

    await this.importModules(files);

    return files;
  };

  this.settings.createItem('Manage Modules', ['',
    {
      type: 'button',
      text: 'Import Modules',
      onclick: async () => {
        let files = await this.importModulesFull();

        for (let f of files) {
          let n = f.filename.split('.').slice(0, -1).join('.');

          if (this.modules[n].onLoadingFinished !== undefined) {
            await this.modules[n].onLoadingFinished();
          }
        }

        this.settings.close();
      },
    },

    {
      type: 'header',
      text: 'Imported Modules'
    }
  ]);

  this.settings.createItem('Uninstall', [""]);

  this.settings.createSeparator();

  this.settings.createHeading('GooseMod Modules');

  await this.importModulesFull();

  for (let p in this.modules) {
    if (this.modules.hasOwnProperty(p) && this.modules[p].onLoadingFinished !== undefined) {
      await this.modules[p].onLoadingFinished();

      this.logger.debug(`import.module.runOnLoadingFinishedHandler.${p}`, 'Ran onLoadingFinished()');
    }
  }

  this.remove = () => {
    this.removed = true;

    for (let p in this.modules) {
      if (this.modules.hasOwnProperty(p) && this.modules[p].remove !== undefined) {
        this.modules[p].remove();
      }
    }
  };
}).bind({})();