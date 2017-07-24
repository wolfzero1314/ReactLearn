
import React from "react";

import {Col,Grid,Row,Tab,Nav,NavItem,Tabs,div,Pager,Well,Label} from "react-bootstrap";

import style from "./index.css"

class Docs extends React.Component{
    constructor(props){
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.handlePageSelect=this.handlePageSelect.bind(this);
        this.state={
            eventKey:"1",
            githref:"https://github.com/facebook/react/blob/master/docs/docs/",
            facebookhref:"https://github.com/facebookincubator/",
            reacthref:"https://facebook.github.io/react/",
        }
    }
    handleSelect(eventKey){
        console.log(eventKey);
        event.preventDefault();
        this.setState({eventKey});
    }
    handlePageSelect(eventKey){
        event.preventDefault();
        var eventKey=this.state.eventKey;
        console.log(eventKey);
    }
    //var localhref="https://github.com/facebook/react/blob/master/docs/docs/";
    render(){
        return(
            <section>
                <Grid>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey={this.state.eventKey} onSelect={this.handleSelect}>
                                <Row className="clearfix">
                                    <Col sm={2} xsHidden>
                                        <h4>快速上手</h4>
                                        <Nav stacked>
                                            <NavItem eventKey="1">
                                                安装介绍
                                            </NavItem>
                                            <NavItem eventKey="2">
                                                Hello World
                                            </NavItem>
                                            <NavItem eventKey="3">
                                                JSX语法
                                            </NavItem>
                                            <NavItem eventKey="4">
                                                渲染元素
                                            </NavItem>
                                            <NavItem eventKey="5">
                                                Components和Props
                                            </NavItem>
                                            <NavItem eventKey="6">
                                                State和Lifecycle
                                            </NavItem>
                                            <NavItem eventKey="7">
                                                事件操作
                                            </NavItem>
                                            <NavItem eventKey="8">
                                                按需渲染
                                            </NavItem>
                                            <NavItem eventKey="9">
                                                列表和key值
                                            </NavItem>
                                            <NavItem eventKey="10">
                                                表单
                                            </NavItem>
                                            <NavItem eventKey="11">
                                                状态提升
                                            </NavItem>
                                            <NavItem eventKey="12">
                                               构造VS继承
                                            </NavItem>
                                            <NavItem eventKey="13">
                                                React思想
                                            </NavItem>
                                        </Nav>

                                        <h4>进阶指导</h4>
                                        <Nav stacked>
                                            <NavItem eventKey="14">
                                                Tab 14
                                            </NavItem>
                                            <NavItem eventKey="15">
                                                Tab 15
                                            </NavItem>
                                        </Nav>

                                        <h4>参考指南</h4>
                                        <Nav stacked>
                                            <NavItem eventKey="16">
                                                Tab 16
                                            </NavItem>
                                            <NavItem eventKey="17">
                                                Tab 17
                                            </NavItem>
                                        </Nav>

                                        <h4>贡献代码</h4>
                                        <Nav stacked>
                                            <NavItem eventKey="18">
                                                Tab 18
                                            </NavItem>
                                            <NavItem eventKey="19">
                                                Tab 19
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm={10} className="colBgc">

                                        <Tab.Content animation={false}>
                                            <Tab.Pane eventKey="1" className="tabPane">
                                                <h2 style={{display:"inline"}}>简介</h2>
                                                <a className="github" href={this.state.githref+"installation.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">
                                                    <p>React可以灵活的用于项目的多样化开发。你可以用它创建一个新的app,也可以逐步的把它应用到一个已经存在的代码库，而不需要重写这个代码库。</p>
                                                    <p>下面这些选项可以告诉你要做什么。</p>
                                                </div>
                                                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                                    <Tab eventKey={1} title="初尝React">
                                                        <h2>初次尝试</h2>
                                                        <div className="divBoxB">
                                                            <p>
                                                                如果你仅仅只是对“玩”React感兴趣，那你可以使用 <a className="aColor" href="https://codepen.io/gaearon/pen/YGYmEG?editors=0010">CodePen</a>。
                                                                尝试从这个Hello World案例开始吧！你不需要安装任何东西，只要修改一下代码，看看它是否完美执行了。
                                                            </p>
                                                            <p>
                                                                如果你习惯使用自己的编辑器，你也可以 <a className="aColor" href={this.state.reacthref+"downloads/single-file-example.html"}>把它下载下来</a>,
                                                                编写它，并且在你的本地浏览器运行。它只是一种省时的代码形式，所以不要把它应用到实际的项目开发中。
                                                            </p>
                                                            <p>
                                                                你如果想在一个完整的应用程序中使用它，有两种受欢迎的使用React的方式：Creat React App,或者把它添加到已存在的应用程序中。
                                                            </p>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey={2} title="新建App">
                                                        <h2>创建新应用</h2>
                                                        <div className="divBoxB">
                                                            <p>
                                                                <a className="aColor" href={this.state.facebookhref+"create-react-app"}>Create React App</a>
                                                                是建立一个新的React单页面应用的最好方式。它可以为你建立开发环境，这样你就可以使用最新的JavaScript特征；可以为你提供良好的开发体验；
                                                                可以优化你的项目app。
                                                            </p>
                                                            <div>
                                                                <code className="codeColor">
                                                                    npm install -g create-react-app <br/>
                                                                    create-react-app my-app <br/>
                                                                    cd my-app <br/>
                                                                    npm start
                                                                </code>
                                                            </div>
                                                            <p>
                                                                Create Reat App并不处理后端逻辑或者数据库；它只是创建了一个前端的框架，所以你可以在你想要的任何后端使用它。
                                                                它的底层使用诸如Babel和webpack的构建工具，但运行时无需配置。
                                                            </p>
                                                            <p>
                                                                当你准备好部署项目的时候，运行 <code className="codeColor">npm run build</code>就可以在你的
                                                                <code className="codeColor">build</code>文件夹下为你的app创建一个最优的框架。你可以通过
                                                                <a className="aColor" href={this.state.facebookhref+"create-react-app#create-react-app-"}>README</a>和
                                                                <a className="aColor" href={this.state.facebookhref+"create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents"}>用户指南</a>
                                                                学习更多关于Create React App 的知识。
                                                            </p>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey={3} title="添加React到已有的App">
                                                        <h2>添加React到已有的应用</h2>
                                                        <div className="divBoxB">
                                                            <p>在开始使用React时，你不需要重写你的app。</p>
                                                            <p>我们推荐把React添加到你的应用程序的一个小的区块中，比如一个个人的部件里，这样你就可以看到它是否在你的案例完美运行。</p>
                                                            <p>虽然不搭建框架React也可以使用，但为了高效，我们还是推荐使用框架。一个具有代表性框架由以下几点构成：</p>
                                                            <ul>
                                                                <li>
                                                                    <strong>包管理器(package manager)</strong>,比如
                                                                    <a className="aColor" href="https://yarn.bootcss.com/">Yarn</a>和
                                                                    <a className="aColor" href="https://www.kancloud.cn/shellway/npm-doc/199981">npm</a>。
                                                                    它可以让你利用第三方包巨大的资源系统，轻松实现安装和更新。
                                                                </li>
                                                                <li>
                                                                    <strong>打包器(bundler)</strong>,比如
                                                                    <a className="aColor" href="http://www.css88.com/doc/webpack2/guides/development/">webpack</a>和
                                                                    <a className="aColor" href="http://browserify.org/">Browserify</a>。
                                                                    它可以让你编写模块化代码，并且打包以优化加载时间。
                                                                </li>
                                                                <li>
                                                                    <strong>编译器(compiler)</strong>,比如
                                                                    <a className="aColor" href="https://babeljs.io/">Babel</a>。
                                                                    它可以让你编写在古老的浏览器运行的现代化代码。
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <h3>安装React</h3>
                                                        <div className="divBoxB">
                                                            <Well>
                                                                <h4>提醒：</h4>
                                                                <p>
                                                                    一旦安装完成，我们强烈推荐建立项目开发流程，以确保你的项目里应用的是React的快速版本。
                                                                </p>
                                                            </Well>
                                                            <p>
                                                                我们推荐使用Yarn或npm管理前端的依赖。如果你是刚开始接触包管理器，<a className="aColor" href="https://yarn.bootcss.com/">Yarn documentation</a>
                                                                可以给你一个良好的初始体验。
                                                            </p>
                                                            <p>使用yarn安装React,执行：</p>
                                                            <Well>
                                                                <code className="codeColor">
                                                                    yarn init
                                                                    <br/>
                                                                    yarn add reat reat-dom
                                                                </code>
                                                            </Well>
                                                            <p>使用npm安装React,执行：</p>
                                                            <Well>
                                                                <code className="codeColor">
                                                                    npm init
                                                                    <br/>
                                                                   npm install --save reat reat-dom
                                                                </code>
                                                            </Well>
                                                            <p>Yarn 和 npm 都是从 <a className="aColor" href="https://www.npmjs.com/">npm注册表</a>下载依赖的。</p>
                                                        </div>

                                                        <h3>使用ES6和JSX</h3>
                                                        <div className="divBoxB">
                                                            <p>
                                                                我们推荐使用React的时候使用Babel，它可以让你在你的JavaScript代码里使用ES6和JSX。
                                                                ES6是一个具备现代JavaScript的便捷开发特性的集合。
                                                                而JSX是JavaScript语言的延伸，可以通过React完美执行。
                                                            </p>
                                                            <p>
                                                                <a className="aColor" href="https://babeljs.io/docs/setup/#babel_cli">Babel安装介绍</a>
                                                                讲解了各种不同环境下Babel的安装方法。确保你安装了
                                                                <a href="http://babeljs.io/docs/plugins/preset-react/#basic-setup-with-the-cli-">
                                                                    <code className="codeColor">babel-preset-react</code>
                                                                </a> 和
                                                                <a href="http://babeljs.io/docs/plugins/preset-es2015/#basic-setup-with-the-cli-">
                                                                    <code className="codeColor">babel-preset-es2015</code>
                                                                </a>
                                                                ,并且在
                                                                <a href="http://babeljs.io/docs/usage/babelrc/">
                                                                    <code className="codeColor">.babelrc</code>
                                                                </a>
                                                                中进行了配置。
                                                            </p>
                                                        </div>

                                                        <h3>使用ES6和JSX创建Hello World！</h3>
                                                        <div className="divBoxB">
                                                            <p>
                                                                我们推荐使用webpack或Browserify类似的打包器，这样你就可以编写模块化代码，并将代码打包以优化加载时间。
                                                            </p>
                                                            <p>
                                                                最小的React案例：
                                                            </p>
                                                            <code className="codeColor">
                                                                <p>import React from 'react';</p>
                                                                <p>import ReactDOM from 'react-dom';</p>
                                                                <p>ReactDOM.render(</p>
                                                                <p>&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;,</p>
                                                                <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                                <p>);</p>
                                                            </code>
                                                            <p>
                                                                上面的代码渲染到了id为 <code className="codeColor">root</code> 的DOM元素，所以在你的HTML文件中需要有
                                                                <code className="codeColor">&lt;div&nbsp;id="root"&gt;&lt;&frasl;div&gt;</code>。
                                                            </p>
                                                            <p>
                                                                与其类似，你也可以在你用其他的JavaScript UI库编写的app的DOM元素中渲染一个React component。
                                                            </p>
                                                            <h4>
                                                                <a className="aColor" href={this.state.reacthref+"docs/integrating-with-other-libraries.html#integrating-with-other-view-libraries"}>
                                                                    更多>>
                                                                </a>
                                                            </h4>
                                                        </div>

                                                        <h3>开发和生产版本</h3>
                                                        <div className="divBoxB">
                                                            <p>
                                                                默认情况下，React包含很多有帮助的警告信息。这些警告信息在实际开发是非常有用的。
                                                            </p>
                                                            <strong>
                                                                但是，这些警告信息使得React的开发版本体积偏大，运行偏慢。所以，在配置时应该使用生产用的版本。
                                                            </strong>
                                                            <p>
                                                                <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#use-the-production-build"}>
                                                                    如何证明你的网站应用了正确的React版本
                                                                </a>
                                                                ，并且如何更有效的安装React框架:

                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#create-react-app"}>
                                                                        使用Create React App
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#single-file-builds"}>
                                                                        使用Single-file Builds
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#brunch"}>
                                                                        使用Brunch
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#browserify"}>
                                                                        使用Browserify
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#rollup"}>
                                                                        使用Rollup
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="aColor" href={this.state.reacthref+"docs/optimizing-performance.html#webpack"}>
                                                                        使用webpack
                                                                    </a>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                        <h3>使用CDN</h3>
                                                        <div className="divBoxB">
                                                            <p>
                                                                如果你不想使用npm管理依赖文件，
                                                                <code>react</code>和<code>react-dom</code>npm包的<code>dist</code>文件夹内提供了CDN链接的单个引用文件：
                                                            </p>
                                                            <code className="codeColor">
                                                                <p>&lt;script&nbsp;src="https://unpkg.com/react@15/dist/react.js"&gt;&lt;&frasl;script&gt;</p>
                                                                <p>&lt;script&nbsp;src="https://unpkg.com/react-dom@15/dist/react-dom.js"&gt;&lt;&frasl;script&gt;</p>
                                                            </code>
                                                            <p>
                                                                上面的版本只适合于开发，用到实际项目就不合适了。
                                                            </p>
                                                            <p>
                                                                轻便且最佳化的用于生产的版本：
                                                            </p>
                                                            <code className="codeColor">
                                                                <p>&lt;script&nbsp;src="https://unpkg.com/react@15/dist/react.min.js"&gt;&lt;&frasl;script&gt;</p>
                                                                <p>&lt;script&nbsp;src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"&gt;&lt;&frasl;script&gt;</p>
                                                            </code>
                                                            <p>
                                                                可以用其它的版本号替换 <code>15</code> 来使用 <code>react</code>和 <code>react-dom</code>的其它版本。
                                                            </p>
                                                            <p>
                                                                如果你使用了Bower,通过 <code>react</code> 包安装React也是可以的。
                                                            </p>
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="2" className="tabPane">
                                                <h2 style={{display:"inline"}}>Hello World</h2>
                                                <a className="github" href={this.state.githref+"hello-world.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">
                                                    开始尝试React的最便捷的方式就是使用
                                                    <a className="aColor" href="https://codepen.io/gaearon/pen/ZpvBNJ?editors=0010">CodePen的Hello World案例</a>。
                                                    你不需要安装任何东西;仅仅需要打开它，然后按步骤操作即可。如果你像使用自己的开发环境，那么请阅读 <code>安装介绍</code>。
                                                    <p>
                                                        最小的React案例：
                                                    </p>
                                                    <code className="codeColor">
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>);</p>
                                                    </code>
                                                    <p>页面会显示“Hello,world!”。</p>
                                                </div>
                                                <h3>关于JavaScript的提醒</h3>
                                                <div className="divBoxB">
                                                    React是一个Javascript库。你如果没有JavaScript语言基础，可以先去学习Javascript。我们还用到了一些ES6的新知识和Babel编译器。
                                                </div>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="3" className="tabPane">
                                                <h2 style={{display:"inline"}}>JSX语法介绍</h2>
                                                <a className="github" href={this.state.githref+"introducing-jsx.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">
                                                    <p>先初始化一个变量：</p>
                                                    <code className="codeColor">
                                                        const element=&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;
                                                    </code>
                                                    <p>它既不是一个字符串，也不是一个HTML标签。</p>
                                                    <p>这就是JSX语法，是JavaScript语法的衍生。</p>
                                                </div>
                                                <h3>在JSX中嵌入JavaScript表达式</h3>
                                                <div className="divBoxB">
                                                    <p>你可以使用花括号包裹JavaScript表达式，嵌入JSX中。</p>
                                                    <p>例如， <code>2+2</code>,<code>user.firstName</code>,<code>formatNumber(user)</code>都是有效的表达式：</p>
                                                    <pre>
                                                        <p>function formatNumber(user)&#123;</p>
                                                        <p>&nbsp;&nbsp;return user.firstName+' '+user.lastName;</p>
                                                        <p>};</p>
                                                        <p>const user=&#123;</p>
                                                        <p>&nbsp;&nbsp;firstName:'Harper',</p>
                                                        <p>&nbsp;&nbsp;lastName:'Perez'</p>
                                                        <p>};</p>
                                                        <p>const element=(</p>
                                                        <p>&nbsp;&nbsp;&lt;h1&gt;</p>
                                                        <p className="aColor">&nbsp;&nbsp;&nbsp;&nbsp;Hello,&#123;formatNumber(user)}!</p>
                                                        <p>&nbsp;&nbsp;&lt;&frasl;h1&gt;</p>
                                                        <p>);</p>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;element,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <p>
                                                        <a className="aColor" href="https://codepen.io/gaearon/pen/PGEjdG?editors=0010">Try it on CodePen!!</a>
                                                    </p>
                                                    <p>
                                                        为了增加可读性，我们把JSX分离出来了。然而这不是必需的，如果这么做了，我们推荐用圆括号把它包裹起来，以避免分号自动嵌入的陷阱。
                                                    </p>
                                                </div>
                                                <h3>JSX也是一个表达式</h3>
                                                <div className="divBoxB">
                                                    <p>经过编译之后，JSX表达式就变成了正规的JavaScript对象。</p>
                                                    <p>这意谓着你可以在 <code>if</code>条件语句和 <code>for</code>循环中使用JSX，或把它赋值给变量，或作为参数传递，并通过函数返回：</p>
                                                    <pre>
                                                        <p>function getGreeting(user)&#123;</p>
                                                        <p>&nbsp;&nbsp;if(user)&#123;</p>
                                                        <p className="aColor">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&lt;h1&gt;Hello,&#123;formatName(user)&#125;!&lt;&frasl;h1&gt;;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p className="aColor">&nbsp;&nbsp;return&nbsp;&lt;h1&gt;Hello,Stranger.&lt;&frasl;h1&gt;;</p>
                                                        <p>};</p>
                                                    </pre>
                                                </div>
                                                <h3>JSX可以指定属性</h3>
                                                <div className="divBoxB">
                                                    <p>你可以使用引号指定字符串作为属性值:</p>
                                                    <pre>
                                                        <p>const&nbsp;element=&lt;div&nbsp;tabIndex="0"&gt;&lt;&frasl;div&gt;</p>
                                                    </pre>
                                                    <p>
                                                        你也可以用花括号嵌入一个JavaScript表达式作为属性：
                                                    </p>
                                                    <pre>
                                                        <p>const&nbsp;element=&lt;img&nbsp;src=&#123;user.avatarUrl&#125;&gt;&lt;&frasl;img&gt;</p>
                                                    </pre>
                                                    <p>
                                                        当把一个JavaScript表达式嵌入属性的时候，花括号外面不能再包裹引号，否则JSX就会把属性当作字符串，而不是表达式。
                                                    </p>
                                                    <p>
                                                        不能在一个属性里同时使用引号和或花括号。
                                                    </p>
                                                </div>
                                                <h3>JSX可以指定子元素</h3>
                                                <div className="divBoxB">
                                                    <p>如果是一个空标签，你可以直接使用 <code>/></code>关闭标签，例如XML：</p>
                                                    <pre>
                                                        <p>const&nbsp;element=&lt;img&nbsp;src=&#123;user.avatarUrl&#125;&frasl;&gt;</p>
                                                    </pre>
                                                    <p>JSX可以包含子元素：</p>
                                                    <pre>
                                                        <p>const element=(</p>
                                                        <p>&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello!&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Nice to see you here!&lt;&frasl;h2&gt;</p>
                                                        <p>&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>)</p>
                                                    </pre>
                                                    <Well>
                                                        <h4 className="aColor">警告：</h4>
                                                        <p>
                                                            由于JSX语法更类似于JavaScript，因此ReactDOM使用 <code>camelCase</code> 类似的驼峰命名法代替了HTML性质的命名方式。
                                                        </p>
                                                        <p>
                                                            例如，<code>class</code>写成了 <code>className</code>,<code>tabindex</code>写成了 <code>tabIndex</code>.
                                                        </p>
                                                    </Well>
                                                </div>
                                                <h3>JSX预防注入式攻击</h3>
                                                <div className="divBoxB">
                                                    <p>在JSX中嵌入用户输入是安全的：</p>
                                                    <pre>
                                                        <p>conset title=response.potentiallyMaliciousInput;</p>
                                                        <p>
                                                            //这样是安全的:<br/>
                                                            const element=&lt;h1&gt;&#123;title&#125;&lt;&frasl;h1&gt;
                                                        </p>
                                                    </pre>
                                                    <p>
                                                        默认情况下，React DOM会避开JSX中嵌入的任何值，在渲染它们之前。因此它可以确保，你不能注入任何你程序中不明确的东西。
                                                        所有东西都在被渲染之前转化成了字符串。这样可以预防
                                                        <a className="aColor" href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS(cross-site-scripting)</a>
                                                        的攻击。
                                                    </p>
                                                </div>
                                                <h3>JSX代表对象</h3>
                                                <div className="divBoxB">
                                                    <p>
                                                        Babel编译JSX给 <code>React.createElement()</code>调用。
                                                    </p>
                                                    <p>
                                                        下面这两个写法的效果是相同的：
                                                    </p>

                                                    <pre>
                                                        <p>const element=(</p>
                                                        <p>&nbsp;&nbsp;&lt;h1&nbsp;className="greeting"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Hello,World!</p>
                                                        <p>&nbsp;&nbsp;&lt;&frasl;h1&gt;</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <pre>
                                                        <p>const element = React.createElement(</p>
                                                        <p>&nbsp;&nbsp;'h1',</p>
                                                        <p>&nbsp;&nbsp;&#123;className: 'greeting'&#125;</p>
                                                        <p>&nbsp;&nbsp;'Hello,world!'</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <p>
                                                        <code>React.createElement()</code>会对你写的代码做一些检查来减少错误，但本质上它创建了一个这样的对象：
                                                    </p>
                                                    <pre>
                                                        <p>//Note:这是简化后的结构</p>
                                                        <p>const element=&#123;</p>
                                                        <p>&nbsp;&nbsp; type:'h1',</p>
                                                        <p>&nbsp;&nbsp; props:&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;className:'greeting',</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;children:'Hello,world!'</p>
                                                        <p>&nbsp;&nbsp;&#125;</p>
                                                        <p>};</p>
                                                    </pre>
                                                    <p>
                                                        这些对象被叫做“React elements”。你可以认为它们是你要在屏幕上看到的说明。
                                                        React读取这些对象并用它们构造DOM，并持续更新。
                                                    </p>
                                                    <p>我们会在下一节探索如何将React elements渲染到DOM。</p>
                                                    <Well>
                                                        <p>小提示：</p>
                                                        <p>我们推荐你为自己的编辑器添加一个“Babel”的主题插件，这样ES6和JSX代码都可以高亮显示。</p>
                                                    </Well>
                                                </div>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="4" className="tabPane">
                                                <h2 style={{display:"inline"}}>渲染元素</h2>
                                                <a className="github" href={this.state.githref+"rendering-elements.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">元素是构造React app最小的模块</div>
                                                <h3>添加元素到DOM对象</h3>
                                                <div className="divBoxB">添加元素到DOM对象</div>
                                                <h3>更新已渲染的元素</h3>
                                                <div className="divBoxB">更新已渲染的元素</div>
                                                <h3>React只更新必要的元素</h3>
                                                <div className="divBoxB">React只更新必要的元素</div>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="5" className="tabPane">
                                                <h2 style={{display:"inline"}}>组件(Components)和属性(props)</h2>
                                                <a className="github" href={this.state.githref+"components-and-props.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">
                                                    <p>Components(组件)可以让你把UI分割成独立的，可复用的区块，并独立地考虑每一个区块。</p>
                                                    <p>从概念上理解，components就像JavaScript的函数。它们接收任意的输入(我们称为“props”)，并返回用来描述应该展示在屏幕上的React元素。</p>
                                                </div>
                                                <h3>函数的和类的组件</h3>
                                                <div className="divBoxB">函数的和类的组件</div>
                                                <h3>渲染一个组件</h3>
                                                <div className="divBoxB">渲染一个组件</div>
                                                <h3>构造组件</h3>
                                                <div className="divBoxB">构造组件</div>
                                                <h3>提取组件</h3>
                                                <div className="divBoxB">提取组件</div>
                                                <h3>属性都是只读的</h3>
                                                <div className="divBoxB">属性都是只读的</div>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="6" className="tabPane">
                                                <h2 style={{display:"inline"}}>状态(state)和生命周期函数(Lifecycle)</h2>
                                                <a className="github" href={this.state.githref+"state-and-lifecycle.md"}>
                                                    <u>Edit On GitHub</u>
                                                </a>
                                                <div className="divBoxA">
                                                    <p>回想一下任意一个之前我们做过的
                                                        <a className="aColor" href="https://facebook.github.io/react/docs/rendering-elements.html#updating-the-rendered-element">ticking clock案例</a>
                                                    </p>
                                                    <p>迄今为止，我们只学习了一种更新UI的方式</p>
                                                    <p>就是通过调用 <code className="codeColor">ReactDOM.render()</code>来渲染要输出的元素。</p>
                                                </div>
                                                <h3>把一个函数转化成一个类</h3>
                                                <div className="divBoxB">
                                                    <p>你可以通过五个步骤把像<code className="codeColor">Clock</code>的一个函数组件转化成一个类：</p>
                                                    <ol>
                                                        <li>创建一个命名相同的扩展了 <code className="codeColor">React.Component</code> 的
                                                            &nbsp;<a className="aColor" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes">ES6 class</a>
                                                        </li>
                                                        <li>给它添加一个空的 <code className="codeColor">render()</code> 方法</li>
                                                        <li>把函数体移动到 <code className="codeColor">render()</code> 方法内部</li>
                                                        <li>用 <code className="codeColor">this.props</code> 替换掉 <code className="codeColor">render()</code> 方法内的 <code className="codeColor">props</code> </li>
                                                        <li>删除剩下的空的函数声明</li>
                                                    </ol>
                                                </div>
                                                <h3>添加本地state到类</h3>
                                                <div className="divBoxB">添加本地state到一个类</div>
                                                <h3>添加生命周期函数到类</h3>
                                                <div className="divBoxB">添加生命周期函数到一个类</div>
                                                <h3>正确使用state</h3>
                                                <div className="divBoxB">
                                                    <h4>不要直接修改state,而是使用 <code className="codeColor">setState()</code> </h4>
                                                    <h4>state的更新可以是异步的</h4>
                                                    <h4>state的更新方式是“融合”</h4>
                                                </div>
                                                <h3>数据流</h3>
                                                <div className="divBoxB">数据流</div>
                                                <Pager onSelect={this.handlePageSelect}>
                                                    <Pager.Item previous href="#">&larr; Prev</Pager.Item>
                                                    <Pager.Item next href="#">Next &rarr;</Pager.Item>
                                                </Pager>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Grid>
            </section>

        )
    }
}

export default Docs;