import consoleDefaultParams from './config';

/**
 * @function makeComment
 * Returns a comment to console with a custom style according to the passed arguments
 * 
 * @param {String} title - the title of the comment (set as groupCollapsed as default)
 * @param {Array|undefined} [comments=[]] - array with each comment to be consoled as a string element
 * @param {String='default','bw','wb','fail','danger','alert','warning','info','success','successful','important'} [status='default'] - status to be used to define its style (default|bw|wb|fail|danger|alert|warning|info|success|successful|important)
 * @param {String='xxs,'xs','sm','md','lg','xl','xxl'} [size='md'] - defines font properties (xxs|xs|sm|md|lg|xl|xxl)
 * @param {String='main','secondary','badge','badgeInverted'} [type='main'] - defines wich style to be applied (main|secondary|badge|badgeInverted)
 * 
 * @requires consoleDefaultParams - that maps its styles template properties
 */
const makeComment = function(title, comments = [], status = 'default', size = "md", type = 'main') {

  if (comments !== undefined && comments !== [] && comments === comments.toString()) {
    let oldComments = comments;
    comments = [];
    comments.push(oldComments);
  }

  switch (type) {
    case 'main':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (let comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      break;
    case 'badge':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (let comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      break;
    case 'badgeInverted':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (let comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      break;
    case 'secondary':
    default:
      if (comments !== undefined) {
        for (let comment of comments) {
          console.log(`%c${status}%c %c${title}%c %c${comment}`,
            `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
            `${consoleDefaultParams.size[size]['secondary']}`,
            `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['main']}`,
            `${consoleDefaultParams.size[size]['secondary']}`,
            `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
        break;
      }
  }
};
export default makeComment;