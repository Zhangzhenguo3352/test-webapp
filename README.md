1��github �½�һ���ֿ�
2������ ����  git clone xxxx
3��git init    ��ʼ�� package.json
4��touch .gitignore README.md   ���������ı����� ˵���ı�
5��mkdir src build  ���������ļ��� src��ʼ���ļ��� �� build�������ļ���
6���� src �ļ�����    touch index.js component.js  ����index.js ��  component.js
7���� build �ļ�����    touch index.html  ����index.html
8��npm install webpack -g --save-dev    �ҷ��ֱ���ȫ�ְ�װ
9��touch webpack.config.js         webpack �õĻ�Ҳ��Ҫ����һ�������ļ��� 
10��package.json  ������ ���� npm run build ���
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build":"webpack"
},
11��û���� package.json �����ã����� webpack ������
12��npm install webpack-dev-server --save-dev   ����ʹ���ԣ�������Щ
13���������� �޸��˾����� ������� -w ��--watch �ļ�д��
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w"
},
14��webpack --help ��webpack ������Щ����
          webpack --progess --colors   ��� ���ֽ��� �� ��ɫ����
          webpack --display-error-details   ��� ���ִ��� λ��������


15���ܹ������ȸ��� 8080 �˿� package.json д�����Է���  http://localhost:8080
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server"
},
     ����ָ�� ��Ĭ�Ϸ��ʶ˿ڽ����Ǹ��ļ����������� --content-base build ,Ĭ��ָ�� build �ļ���
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build"
},
     ��Ҳ�в���
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build --colors"
},
16���޸��ļ��� package.json ʱ Ҫ��ʹ�ã�npm run build Ȼ���������ȸ��� npm run dev 
17����ҳ�棬���֧��webpackҲ���Դ������Ҫ�޸� webpack.config.js
module.exports = {
    //�ҵ�����ļ�
    entry:{
        index:'./src/index.js',
        com:'./src/component.js'
    },
    //���
    output:{
        path:'./build',
        filename:'[name].js'
    }
}


































