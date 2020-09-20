/**
    * @const consoleDefaultParams
    * Detains all default template console style
    * @namespace
    * @property {object} size - defines font-size, line-height as well as padding and margin according to its arguments passed (size and 'scenery')
    * @property {object} size.xxs - defines extra small properties
    * @property {object} size.xxs.main - defines main type (style) extra extra small properties
    * @property {object} size.xxs.secondary - defines secondary type (style) extra extra small properties
    * @property {object} size.xxs.badge - defines badge type (style) extra extra small properties
    * @property {object} size.xxs.badgeInverted - defines badgeInverted type (style) extra extra small properties
    * @property {object} size.xs - defines extra small properties
    * @property {object} size.xs.main - defines main type (style) extra small properties
    * @property {object} size.xs.secondary - defines secondary type (style) extra small properties
    * @property {object} size.xs.badge - defines badge type (style) extra small properties
    * @property {object} size.xs.badgeInverted - defines badgeInverted type (style) extra small properties
    * @property {object} size.sm - defines small properties
    * @property {object} size.sm.main - defines main type (style) small properties
    * @property {object} size.sm.secondary - defines secondary type (style) small properties
    * @property {object} size.sm.badge - defines badge type (style) small properties
    * @property {object} size.sm.badgeInverted - defines badgeInverted type (style) small properties
    * @property {object} size.md - defines medium properties (default)
    * @property {object} size.md.main - defines main type (style) medium properties (default)
    * @property {object} size.md.secondary - defines secondary type (style) medium properties (default)
    * @property {object} size.md.badge - defines badge type (style) medium properties (default)
    * @property {object} size.md.badgeInverted - defines badgeInverted type (style) medium properties (default)
    * @property {object} size.lg - defines large properties
    * @property {object} size.lg.main - defines main type (style) large properties
    * @property {object} size.lg.secondary - defines secondary type (style) large properties
    * @property {object} size.lg.badge - defines badge type (style) large properties
    * @property {object} size.lg.badgeInverted - defines badgeInverted type (style) large properties
    * @property {object} size.xl - defines extra large properties
    * @property {object} size.xl.main - defines main type (style) extra large properties
    * @property {object} size.xl.secondary - defines secondary type (style) extra large properties
    * @property {object} size.xl.badge - defines badge type (style) extra large properties
    * @property {object} size.xl.badgeInverted - defines badgeInverted type (style) extra large properties
    * @property {object} size.xxl - defines extra extra large properties
    * @property {object} size.xxl.main - defines main type (style) extra extra large properties
    * @property {object} size.xxl.secondary - defines secondary type (style) extra extra large properties
    * @property {object} size.xxl.badge - defines badge type (style) extra extra large properties
    * @property {object} size.xxl.badgeInverted - defines badgeInverted type (style) extra extra large properties
    * @property {object} color - defines color, background-color as well as border style, according to its arguments ('status' and 'scenery')
    * @property {object} color.default - defines extra small properties
    * @property {object} color.default.main - defines main type (style) default color properties
    * @property {object} color.default.secondary - defines secondary type (style) default color properties
    * @property {object} color.default.badge - defines badge type (style) default color properties
    * @property {object} color.default.badgeInverted - defines badgeInverted type (style) default color properties
    * @property {object} color.bw - defines extra small properties
    * @property {object} color.bw.main - defines main type (style) bw color properties
    * @property {object} color.bw.secondary - defines secondary type (style) bw color properties
    * @property {object} color.bw.badge - defines badge type (style) bw color properties
    * @property {object} color.bw.badgeInverted - defines badgeInverted type (style) bw color properties
    * @property {object} color.wb - defines extra small properties
    * @property {object} color.wb.main - defines main type (style) wb color properties
    * @property {object} color.wb.secondary - defines secondary type (style) wb color properties
    * @property {object} color.wb.badge - defines badge type (style) wb color properties
    * @property {object} color.wb.badgeInverted - defines badgeInverted type (style) wb color properties
    * @property {object} color.error - defines extra small properties
    * @property {object} color.error.main - defines main type (style) error color properties
    * @property {object} color.error.secondary - defines secondary type (style) error color properties
    * @property {object} color.error.badge - defines badge type (style) error color properties
    * @property {object} color.error.badgeInverted - defines badgeInverted type (style) error color properties
    * @property {object} color.fail - defines extra small properties
    * @property {object} color.fail.main - defines main type (style) fail color properties
    * @property {object} color.fail.secondary - defines secondary type (style) fail color properties
    * @property {object} color.fail.badge - defines badge type (style) fail color properties
    * @property {object} color.fail.badgeInverted - defines badgeInverted type (style) fail color properties
    * @property {object} color.danger - defines extra small properties
    * @property {object} color.danger.main - defines main type (style) danger color properties
    * @property {object} color.danger.secondary - defines secondary type (style) danger color properties
    * @property {object} color.danger.badge - defines badge type (style) danger color properties
    * @property {object} color.danger.badgeInverted - defines badgeInverted type (style) danger color properties
    * @property {object} color.alert - defines extra small properties
    * @property {object} color.alert.main - defines main type (style) alert color properties
    * @property {object} color.alert.secondary - defines secondary type (style) alert color properties
    * @property {object} color.alert.badge - defines badge type (style) alert color properties
    * @property {object} color.alert.badgeInverted - defines badgeInverted type (style) alert color properties
    * @property {object} color.warning - defines extra small properties
    * @property {object} color.warning.main - defines main type (style) warning color properties
    * @property {object} color.warning.secondary - defines secondary type (style) warning color properties
    * @property {object} color.warning.badge - defines badge type (style) warning color properties
    * @property {object} color.warning.badgeInverted - defines badgeInverted type (style) warning color properties
    * @property {object} color.info - defines extra small properties
    * @property {object} color.info.main - defines main type (style) info color properties
    * @property {object} color.info.secondary - defines secondary type (style) info color properties
    * @property {object} color.info.badge - defines badge type (style) info color properties
    * @property {object} color.info.badgeInverted - defines badgeInverted type (style) info color properties
    * @property {object} color.success - defines extra small properties
    * @property {object} color.success.main - defines main type (style) success color properties
    * @property {object} color.success.secondary - defines secondary type (style) success color properties
    * @property {object} color.success.badge - defines badge type (style) success color properties
    * @property {object} color.success.badgeInverted - defines badgeInverted type (style) success color properties
    * @property {object} color.sucessful - defines extra small properties
    * @property {object} color.sucessful.main - defines main type (style) sucessful color properties
    * @property {object} color.sucessful.secondary - defines secondary type (style) sucessful color properties
    * @property {object} color.sucessful.badge - defines badge type (style) sucessful color properties
    * @property {object} color.sucessful.badgeInverted - defines badgeInverted type (style) sucessful color properties
    * @property {object} color.important - defines extra small properties
    * @property {object} color.important.main - defines main type (style) important color properties
    * @property {object} color.important.secondary - defines secondary type (style) important color properties
    * @property {object} color.important.badge - defines badge type (style) important color properties
    * @property {object} color.important.badgeInverted - defines badgeInverted type (style) important color properties
    * @property {object} color.log - defines extra small properties
    * @property {object} color.log.main - defines main type (style) log color properties
    * @property {object} color.log.secondary - defines secondary type (style) log color properties
    * @property {object} color.log.badge - defines badge type (style) log color properties
    * @property {object} color.log.badgeInverted - defines badgeInverted type (style) log color properties
    */
const consoleDefaultParams = {
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
    successful: {
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

export default consoleDefaultParams;