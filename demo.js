import makeComment from './makeComment';

const makeCommentsByStatus = () => {

  console.groupCollapsed('%cHelper Function > makeComment()\n%cby status', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

  console.groupCollapsed('%cmakeComment(\'default md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'wb md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('wb md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'bw md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('bw md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'error md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('error md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'fail md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('fail md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'danger md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('danger md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'alert md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('alert md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'warning md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('warning md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'success md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('success md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'successful md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successful\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('successful md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'successful', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'important md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('important md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'log md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('log md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'md', 'main');
  console.groupEnd();

  console.groupEnd();
}

const makeCommentsBySize = () => {

  console.groupCollapsed('%cHelper Function > makeComment()\n%cby size', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

  console.groupCollapsed('%cmakeComment(\'info xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xxs\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xxs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xs\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'sm\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'sm', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'md\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'lg\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xl\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xl', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info xxl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xxl\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info xxl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xxl', 'main');
  console.groupEnd();

  console.groupEnd();
}

  const makeCommentsByType = () => {
  

  console.groupCollapsed('%cHelper Function > makeComment()\n%cby type', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

  console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'badgeInverted');
  console.groupEnd();

  console.groupEnd();
}

const makeMixedComments = () => {

  console.groupCollapsed('%cHelper Function > makeComment()\n%cmixed', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

  console.groupCollapsed('%cmakeComment(\'incomplete\')', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('incomplete');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'default\', [\'Comment 01\'])', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default', ['Comment 01']);
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'default xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'bw xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('bw xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'wb sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('wb sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'error md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('error md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'fail lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('fail lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'danger xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('danger xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'alert xxl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('alert xxl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'warning xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('warning xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'success md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('success md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'successful sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successful\'%c,%c\'sm\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('successful sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'successful', 'sm', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'important xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('important xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'log xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('log xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'main');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'default xxs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default xxs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'bw xs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('bw xs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'wb sm secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('wb sm secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'error md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('error md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'fail lg secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('fail lg secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'danger xl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('danger xl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'alert xxl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('alert xxl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'warning xl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('warning xl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info lg secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info lg secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'success md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('success md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'successful sm secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successful\'%c,%c\'sm\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('successful sm secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'successful', 'sm', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'important xs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('important xs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'log xxs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('log xxs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'secondary');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'default xxs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default xxs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'bw xs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('bw xs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'wb sm badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('wb sm badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'error md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('error md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'fail lg badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('fail lg badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'danger xl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('danger xl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'alert xxl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('alert xxl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'warning xl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('warning xl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info lg badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info lg badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'success md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('success md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'successful sm badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successful\'%c,%c\'sm\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('successful sm badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'successful', 'sm', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'important xs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('important xs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'log xxs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('log xxs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'badge');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'default xxs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('default xxs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'bw xs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('bw xs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'wb sm badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('wb sm badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'error md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('error md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'fail lg badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('fail lg badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'danger xl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('danger xl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'alert xxl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('alert xxl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'warning xl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('warning xl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'info lg badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('info lg badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'success md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('success md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'successful sm badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successful\'%c,%c\'sm\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('successful sm badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'successful', 'sm', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'important xs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('important xs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'badgeInverted');
  console.groupEnd();

  console.groupCollapsed('%cmakeComment(\'log xxs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
  makeComment('log xxs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'badgeInverted');
  console.groupEnd();

  console.groupEnd();
}

const makeCommentDemo = () => {
  console.groupCollapsed('%cHelper Function\n%cmakeComment()', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');
  makeCommentsBySize();
  makeCommentsByType();
  makeCommentsByStatus();
  makeMixedComments();
  console.groupEnd();
};

export default makeCommentDemo;
