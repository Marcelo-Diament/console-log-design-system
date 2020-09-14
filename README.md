![console-log-design-system](https://djament.com.br/img/preview.png)

# console.log design system

This package aims to make easier to create visual console messages (including groupCollapsed ones) as well as to create containers so messages will be more organized.

## getting started

1. Make sure you have Node.js installed;
2. Install the **console-log-design-system** by running `npm i console-log-design-system`;
3. Import the single module to your script with `import makeComment from './node_modules/console-log-design-system/index';`;
4. Link your script as a module to the front-end with `<script type="module" src="./YOURFILE.js"></script>`;
5. Use the single function of the package, called **`makeComment()`**, passing the right required and optional arguments.

This is the very first version of it. So, if you have any suggestions, feel free to get in touch!

## consoleDefaultParams

``` js
/**
 * @const consoleDefaultParams
 * Detains all default template console style
 * @property size - defines font-size, line-height as well as padding and margin according to its arguments passed (size and 'scenery')
 * @property color - defines color, background-color as well as border style, according to its arguments ('status' and 'scenery')
 * @property main - used in both size and color properties, defines its status as main
 * @property secondary - used in both size and color properties, defines its status as secondary
 * @property badge - used in both size and color properties, defines its status as badge
 */
```

## makeComment()

``` js
/**
 * @function makeComment
 * Returns a comment to console with a custom style according to the passed arguments
 * 
 * @param {String} title - the title of the comment (set as groupCollapsed as default)
 * @param {Array} comments - array with each comment to be consoled as a string element
 * @param {String='default','bw','wb','fail','danger','alert','warning','info','success','successfull','important'} [status='defaul'] - status to be used to define its style (default|bw|wb|fail|danger|alert|warning|info|success|successfull|important)
 * @param {String='xxs,'xs','sm','md','lg','xl','xxl'} [size='md'] - defines font properties (xxs|xs|sm|md|lg|xl|xxl)
 * @param {String='main','secondary','badge','badgeInverted'} [type='main'] - defines wich style to be applied (main|secondary|badge|badgeInverted)
 * 
 * @requires consoleDefaultParams - that maps its styles template properties
 */
```

**Marcelo Diament** | Front End Developer and Instructor

[Github][Github] | [LinkedIn][LinkedIn]

[//]: # 

[Github]: <https://github.com/Marcelo-Diament>
[LinkedIn]: <https://linkedin.com/in/marcelodiament>
