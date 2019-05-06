/**
 * Build styles
 */
require('./index.css').toString();

/**
 * @typedef {Object} ChapterData
 * @description Tool's input and output data format
 * @property {String} text — Chapter's content
 */

/**
 * @typedef {Object} ChapterConfig
 * @description Tool's config from Editor
 * @property {string} placeholder — Block's placeholder
 */

export default class Chapter {
   /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ChapterData, config: ChapterConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    /**
     * Styles
     * @type {Object}
     */
    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-chapter',
    };

    /**
     * Tool's settings passed from Editor
     * @type {ChapterConfig}
     * @private
     */
    this._settings = config;

    /**
     * Block's data
     * @type {ChapterData}
     * @private
     */
    this._data = this.normalizeData(data);

    /**
     * List of settings buttons
     * @type {HTMLElement[]}
     */
    this.settingsButtons = [];

    /**
     * Main Block wrapper
     * @type {HTMLElement}
     * @private
     */
    this._element = this.getTag();
  }

  get defaultElement() {
    return "H1";
  }

  getTag() {
    /**
     * Create element for current Block's level
     */
    let tag = document.createElement(this.defaultElement);

    /**
     * Add text to block
     */
    tag.innerHTML = this._data.text || "";

    /**
     * Add styles class
     */
    tag.classList.add(this._CSS.wrapper);

    /**
     * Make tag editable
     */
    tag.contentEditable = "true";

    /**
     * Add Placeholder
     */
    tag.dataset.placeholder = this._settings.placeholder || "";

    return tag;
  }

   /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   * @param {ChapterData} data
   * @public
   */
  merge(data) {
    let newData = {
      text: this.data.text + data.text,
    };

    this.data = newData;
  }

  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {ChapterData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(blockData) {
    return blockData.text.trim() !== '';
  }

/**
   * Normalize input data
   * @param {ChapterData} data
   * @return {ChapterData}
   * @private
   */
  normalizeData(data) {
    if (typeof data !== 'object') {
      data = {};
    }

    data.text = data.text || '';

    return data;
  }

   /**
   * Extract Tool's data from the view
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {ChapterData} - saved data
   * @public
   */
  save(toolsContent) {
    return {
      text: toolsContent.innerHTML
    };
  }

  /**
   * Get current Tools`s data
   * @returns {ChapterData} Current data
   * @private
   */
  get data() {
    this._data.text = this._element.innerHTML;

    return this._data;
  }

  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ChapterData} data — data to set
   * @private
   */
  set data(data) {
    this._data = this.normalizeData(data);
    /**
     * If data.text was passed then update block's content
     */
    if (data.text !== undefined) {
      this._element.innerHTML = this._data.text || '';
    }
  }

    /**
   * Handle H1-H6 tags on paste to substitute it with chapter Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(event) {
    const content = event.detail.data;

    this.data = {
      text: content.innerHTML
    };
  }

    /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M5.16756 11.4139C5.80736 11.4139 6.33817 11.1966 6.76002 10.762C6.90966 10.6079 7.03453 10.4408 7.13463 10.2608C7.45011 9.69366 7.94646 9.15079 8.59547 9.15079V9.15079C9.28133 9.15079 9.84634 9.72833 9.65315 10.3864C9.5429 10.762 9.38705 11.125 9.1856 11.4754C8.77079 12.1888 8.20833 12.7545 7.49823 13.1727C6.78814 13.5909 6.02179 13.8 5.1992 13.8C3.60323 13.8 2.3377 13.1973 1.40262 11.992C0.46754 10.7866 0 9.1221 0 6.99839V6.69091C0 4.66558 0.464025 3.04616 1.39207 1.83263C2.32013 0.610872 3.58565 0 5.18866 0C6.54557 0 7.6494 0.46328 8.50011 1.38984C9.10798 2.04067 9.51105 2.8377 9.70932 3.78092C9.84978 4.44913 9.28607 5.01817 8.60326 5.01817V5.01817C7.95118 5.01817 7.45059 4.48327 7.20802 3.87799C7.09809 3.60369 6.94876 3.35648 6.76002 3.13636C6.34521 2.64437 5.81438 2.3984 5.16756 2.3984C4.33793 2.3984 3.69814 2.75099 3.24817 3.45614C2.79821 4.15311 2.56972 5.21496 2.56268 6.64171V7.12139C2.56268 8.56453 2.78415 9.64278 3.22708 10.3561C3.67705 11.0613 4.32388 11.4139 5.16756 11.4139Z"/></svg>',
      title: 'Chapter'
    };
  }

  /**
   * Return Tool's view
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
}
