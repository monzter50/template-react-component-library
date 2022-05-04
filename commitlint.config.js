module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter:'@commitlint/format',
  rules:{
    'type-enum':[2,'always',['feature','bugfix','refactor','docs','chore','ci','test','style','wrench']]
  }
};
