var webpack=require("webpack");

//webpack.config.js
module.exports = {
    devtool: 'eval-source-map',//����Source Maps,����ѡ��eval-source-map
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],//Ψһ����ļ�,__dirname��node.js�е�һ��ȫ�ֱ�������ָ��ǰִ�нű����ڵ�Ŀ¼
    output: {//���Ŀ¼
        path: __dirname + '/build',//������js�ļ���ŵĵط�
        filename: 'bundle.js'//����������js���ļ���
    },

    module: {
        //loaders������
        loaders: [
            {
                test: /\.(js|jsx)$/,//һ��ƥ��loaders��������ļ�����չ����������ʽ����������ƥ��js��jsx�ļ������룩
                exclude: /node_modules/,//���β���Ҫ������ļ����ļ��У�����ѡ��
                loader: 'babel-loader'//loader�����ƣ����룩
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader','css-loader']
            },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//��ģ���滻���
    ],

    //webpack-dev-server����
    devServer: {
        contentBase: './build',//Ĭ��webpack-dev-server��Ϊ���ļ����ṩ���ط������������Ϊ����һ��Ŀ¼�µ��ļ��ṩ���ط�������Ӧ������������������Ŀ¼���������õ�"build"Ŀ¼��
        historyApiFallback: true,//�ڿ�����ҳӦ��ʱ�ǳ����ã���������HTML5 history API���������Ϊtrue�����е���ת��ָ��index.html
        inline: true,//����Ϊtrue����Դ�ļ��ı�ʱ���Զ�ˢ��ҳ��
        port: 3000,//����Ĭ�ϼ����˿ڣ����ʡ�ԣ�Ĭ��Ϊ"8080"
    }
};