module.exports = function makeComment(title, comments = undefined, status = 'default', size = "md", type = 'main') {
  let consoleDefaultParams = {
    size: {
      xxs: {
        main: 'font-size:12px;line-height:14px;font-weight:bold;padding:8px 8px;margin:8px auto;',
        secondary: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;',
        badge: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;border-radius:8px;',
        badgeInverted: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;border-radius:8px;'
      },
      xs: {
        main: 'font-size:14px;line-height:16px;font-weight:bold;padding:8px 8px;margin:8px auto;',
        secondary: 'font-size:12px;line-height:14px;padding:8px 8px;margin:8px auto;',
        badge: 'font-size:11px;line-height:13px;padding:8px 8px;margin:8px auto;border-radius:8px;',
        badgeInverted: 'font-size:11px;line-height:13px;padding:8px 8px;margin:8px auto;border-radius:8px;'
      },
      sm: {
        main: 'font-size:16px;line-height:18px;font-weight:bold;padding:8px 8px;margin:5px auto;',
        secondary: 'font-size:14px;line-height:16px;padding:8px 8px;margin:5px auto;',
        badge: 'font-size:12px;line-height:14px;padding:8px 8px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:12px;line-height:14px;padding:8px 8px;margin:5px auto;border-radius:8px;'
      },
      md: {
        main: 'font-size:18px;line-height:20px;font-weight:bold;padding:5px 10px;margin:5px auto;',
        secondary: 'font-size:16px;line-height:18px;padding:5px 10px;margin:5px auto;',
        badge: 'font-size:13px;line-height:15px;padding:5px 10px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:13px;line-height:15px;padding:5px 10px;margin:5px auto;border-radius:8px;'
      },
      lg: {
        main: 'font-size:20px;line-height:22px;font-weight:bold;padding:5px 10px;margin:5px auto;',
        secondary: 'font-size:18px;line-height:20px;padding:5px 10px;margin:5px auto;',
        badge: 'font-size:14px;line-height:16px;padding:5px 10px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:14px;line-height:16px;padding:5px 10px;margin:5px auto;border-radius:8px;'
      },
      xl: {
        main: 'font-size:22px;line-height:24px;font-weight:bold;padding:6px 12px;margin:6px auto;',
        secondary: 'font-size:20px;line-height:22px;padding:6px 12px;margin:6px auto;',
        badge: 'font-size:15px;line-height:17px;padding:6px 12px;margin:6px auto;border-radius:8px;',
        badgeInverted: 'font-size:15px;line-height:17px;padding:6px 12px;margin:6px auto;border-radius:8px;'
      },
      xxl: {
        main: 'font-size:24px;line-height:26px;font-weight:bold;padding:6px 12px;margin:6px auto;',
        secondary: 'font-size:22px;line-height:24px;padding:6px 12px;margin:6px auto;',
        badge: 'font-size:16px;line-height:18px;padding:6px 12px;margin:6px auto;border-radius:8px;',
        badgeInverted: 'font-size:16px;line-height:18px;padding:6px 12px;margin:6px auto;border-radius:8px;'
      },
    },
    color: {
      default: {
        main: 'background-color:transparent;color:$fff;',
        secondary: 'color:#fff;',
        badge: 'color:#fff;border: 2px solid #fff;',
        badgeInverted: 'color:$fff;background-color:#000;border: 2px solid $fff;'
      },
      bw: {
        main: 'background-color:#000;color:#fff;',
        secondary: 'color:#000;',
        badge: 'color:#000;border: 2px solid #000;',
        badgeInverted: 'color:#fff;background-color:#000;border: 2px solid #fff;'
      },
      wb: {
        main: 'background-color:#fff;color:#000;',
        secondary: 'color:#fff;',
        badge: 'color:#fff;border: 2px solid #fff;',
        badgeInverted: 'color:#000;background-color:#fff;border: 2px solid #000;'
      },
      error: {
        main: 'background-color:#8a160d;color:#fff;',
        secondary: 'color:#8a160d;',
        badge: 'color:#8a160d;border: 2px solid #8a160d;',
        badgeInverted: 'color:#fff;background-color:#8a160d;border: 2px solid #fff;'
      },
      fail: {
        main: 'background-color:#f44336;color:#fff;',
        secondary: 'color:#f44336;',
        badge: 'color:#f44336;border: 2px solid #f44336;',
        badgeInverted: 'color:#fff;background-color:#f44336;border: 2px solid #fff;'
      },
      danger: {
        main: 'background-color:#ff5722;color:#fff;',
        secondary: 'color:#ff5722;',
        badge: 'color:#ff5722;border: 2px solid #ff5722;',
        badgeInverted: 'color:#fff;background-color:#ff5722;border: 2px solid #fff;'
      },
      alert: {
        main: 'background-color:#ff9800;color:#000;',
        secondary: 'color:#ff9800;',
        badge: 'color:#ff9800;border: 2px solid #ff9800;',
        badgeInverted: 'color:#000;background-color:#ff9800;border: 2px solid #000;'
      },
      warning: {
        main: 'background-color:#ffc107;color:#000;',
        secondary: 'color:#ffc107;',
        badge: 'color:#ffc107;border: 2px solid #ffc107;',
        badgeInverted: 'color:#000;background-color:#ffc107;border: 2px solid #000;'
      },
      info: {
        main: 'background-color:#00bcd4;color:#000;',
        secondary: 'color:#00bcd4;',
        badge: 'color:#00bcd4;border: 2px solid #00bcd4;',
        badgeInverted: 'color:#000;background-color:#00bcd4;border: 2px solid #000;'
      },
      success: {
        main: 'background-color:#8bc34a;color:#000;',
        secondary: 'color:#8bc34a;',
        badge: 'color:#8bc34a;border: 2px solid #8bc34a;',
        badgeInverted: 'color:#000;background-color:#8bc34a;border: 2px solid #000;'
      },
      successfull: {
        main: 'background-color:#4caf50;color:#000;',
        secondary: 'color:#4caf50;',
        badge: 'color:#4caf50;border: 2px solid #4caf50;',
        badgeInverted: 'color:#000;background-color:#4caf50;border: 2px solid #000;'
      },
      important: {
        main: 'background-color:#e91e63;color:#000;',
        secondary: 'color:#e91e63;',
        badge: 'color:#e91e63;border: 2px solid #e91e63;',
        badgeInverted: 'color:#000;background-color:#e91e63;border: 2px solid #000;'
      },
      log: {
        main: 'background-color:#c7c7c7;color:#2e2e2e;',
        secondary: 'color:#c7c7c7;',
        badge: 'color:#c7c7c7;border: 2px solid #c7c7c7;',
        badgeInverted: 'color:#2e2e2e;background-color:#c7c7c7;border: 2px solid #2e2e2e;'
      }
    }
  };

  if (comments !== undefined && comments === comments.toString()) {
    oldComments = comments;
    comments = [];
    comments.push(oldComments)
  }

  switch (type) {
    case 'main':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      return;
    case 'badge':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      return;
    case 'badgeInverted':
      console.groupCollapsed(`%c${status}%c %c${title}`,
        `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
        `${consoleDefaultParams.size[size]['secondary']}`,
        `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
      if (comments !== undefined) {
        for (comment of comments) {
          console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
      }
      console.groupEnd();
      return;
    case 'secondary':
    default:
      if (comments !== undefined) {
        for (comment of comments) {
          console.log(`%c${status}%c %c${title}%c %c${comment}`,
            `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
            `${consoleDefaultParams.size[size]['secondary']}`,
            `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['main']}`,
            `${consoleDefaultParams.size[size]['secondary']}`,
            `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
        }
        return;
      }
  }
}