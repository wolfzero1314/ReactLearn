
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
            codepenhref:"https://codepen.io/gaearon/pen/",
        }
    }
    handleSelect(eventKey){
        event.preventDefault();
        this.setState({eventKey});
        console.log(eventKey);
    }
    handlePageSelect(eventKey){
        event.preventDefault();
        console.log(this.state.eventKey);

    }

    render(){
        return(
            <section>
                <Grid style={{marginTop:"60px"}}>
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
                                                                如果你仅仅只是对“玩”React感兴趣，那你可以使用 <a className="aColor" href={this.state.codepenhref+"YGYmEG?editors=0010"}>CodePen</a>。
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
                                                    <a className="aColor" href={this.state.codepenhref+"ZpvBNJ?editors=0010"}>CodePen的Hello World案例</a>。
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
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;Hello,&#123;formatNumber(user)}!</p>
                                                        <p>&nbsp;&nbsp;&lt;&frasl;h1&gt;</p>
                                                        <p>);</p>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;element,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <p>
                                                        <a className="aColor" href={this.state.codepenhref+"PGEjdG?editors=0010"}>Try it on CodePen!!</a>
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
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&lt;h1&gt;Hello,&#123;formatName(user)&#125;!&lt;&frasl;h1&gt;;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p className="backCode">&nbsp;&nbsp;return&nbsp;&lt;h1&gt;Hello,Stranger.&lt;&frasl;h1&gt;;</p>
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
                                                    <p>在JSX中嵌入用户输入区是安全的：</p>
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
                                                <div className="divBoxA">
                                                    <p>元素是构造React app最小的模块。</p>
                                                    <p>一个元素描述了你将在屏幕上浏览到的东西：</p>
                                                    <pre>
                                                        <p>conset element=&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                    </pre>
                                                    <p>与浏览器的DOM元素不同，React元素都是简单的object,并且易于创建。</p>
                                                    <p>React DOM会注意更新DOM，使它们匹配React元素。</p>
                                                    <Well>
                                                        <h4>特别提醒</h4>
                                                        <p>
                                                            人们可能会混淆elements和components这个更广义的概念。
                                                            我们会在下一部分介绍components。
                                                            elements是components的组成部分，在阅读后面的内容前，我们希望你能阅读这部分内容。
                                                        </p>
                                                    </Well>
                                                </div>
                                                <h3>添加elements到DOM</h3>
                                                <div className="divBoxB">
                                                    <p>假设你的HTMl文件里有这样一个 <code>&lt;div&gt;</code></p>
                                                    <pre>
                                                        <p>&lt;div id="root"&gt;&lt;&frasl;div&gt;</p>
                                                    </pre>
                                                    <p>我们把它叫做“根”DOM节点，因为它内部的一切都将被React DOM处理转化。</p>
                                                    <p>通常用React构建的项目都有一个单独的根DOM节点。如果你准备把React整合进一个已有的app，你可以按照自己的喜好，设置多个独立的根DOM节点。</p>
                                                    <pre>
                                                        <p>const element=&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;&lt;element&frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById("root")</p>
                                                        <p>)</p>
                                                    </pre>
                                                    <a href={this.state.codepenhref+"rrpgNB?editors=1010"} className="aColor">用CodePen尝试代码</a>
                                                </div>
                                                <h3>更新已渲染的元素</h3>
                                                <div className="divBoxB">
                                                    <p>
                                                        React elements是 <a className="aColor" href="https://en.wikipedia.org/wiki/Immutable_object">不可变</a>的。
                                                        一旦你创建了一个element，你就不能再改变它的子元素或属性。一个element就像电影里一个单独的画面：它代表了某一时间点上的用户界面。
                                                    </p>
                                                    <p>以我们现在的知识，唯一更新用户界面的办法救市创建一个新的element,并把它传给 <code className="codeColor">ReactDOM.render()</code>。</p>
                                                    <p>我们来看看下面的ticking clock案例：</p>
                                                    <pre>
                                                        <p>function tick() &#123;</p>
                                                        <p>&nbsp;&nbsp;const element=(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Helleo,world!&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;new Date().toLocaleTimeString()&#125;&lt;&frasl;h2&gt;.</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;element,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>};</p>
                                                        <p>setInterval(tick,1000);</p>
                                                    </pre>
                                                    <a className="aColor" href={this.state.codepenhref+"gwoJZk?editors=0010"}>用CodePen尝试代码</a>
                                                    <p>它会通过 <code className="codeColor">setInterval()</code>每一秒都调用一次 <code className="codeColor">ReactDOM.render()</code>。</p>
                                                    <Well>
                                                        <h4>特别提醒</h4>
                                                        <p>
                                                            事实上，大多数React app仅仅调用一次<code className="codeColor">ReactDOM.render()</code>。
                                                            在下一部分，我们会学些这样的代码是如何封装到有状态的组件里的。
                                                        </p>
                                                        <p>我们建议不要跳过总纲，因为它们互相依赖。</p>
                                                    </Well>
                                                </div>
                                                <h3>React只更新必要的元素</h3>
                                                <div className="divBoxB">
                                                    <p>
                                                        React DOM会把当前元素系子元素同它之前的做比较，并且仅允许有更新必要的DOM把DOM传递给期望的state.
                                                    </p>
                                                    <p>
                                                        你可以通过浏览器工具检查 <a className="aColor" href="https://codepen.io/gaearon/pen/gwoJZk?editors=0010">最后一个案例</a>。
                                                    </p>
                                                    <p>
                                                        尽管我们创建了一个element用来描述每一次ticks时的整个用户界面树，但是只有有内容变化的代码被React DOM更新了。
                                                    </p>
                                                    <p>
                                                        根据我们的经验，思考UI在任一时间的展示效果而不是如何通过时间消除所有类的错误来改变它。
                                                    </p>
                                                </div>
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
                                                <div className="divBoxB">
                                                    <p>定义一个component最方便的方式就是通过Javascript函数：</p>
                                                    <pre>
                                                        <p>function Welecome(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return &lt;h1&gt;Hello,&#123;props.name&#125;&lt;&frasl;h1&gt;</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>ES6 定义一个component:</p>
                                                    <pre>
                                                        <p>class Welcome extends React.Component&#123;</p>
                                                        <p>&nbsp;&nbsp;render()&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Hello,&#123;this.props.name&#125;&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>从React的角度看，以上两种写法是同等的。</p>
                                                </div>
                                                <h3>渲染一个组件</h3>
                                                <div className="divBoxB">
                                                    <p>之前我们只遇到了用React元素代表DOM标签的情况：</p>
                                                    <pre>
                                                        <p>const element=&lt;div &frasl;&gt; ;</p>
                                                    </pre>
                                                    <p>然而，元素也可以用来代替用户定义的组件：</p>
                                                    <pre>
                                                        <p>const element=&lt;Welcome name="Sara"&frasl;&gt; ;</p>
                                                    </pre>
                                                    <p>
                                                        当React发现一个元素代表了一个用户定义的组件时，它就会把JSX属性作为独立的对象传递给这个组件。我们把这个对象叫做“props”。
                                                    </p>
                                                    <p>例如，下面的例子会在页面渲染出“Hello,Sara”:</p>
                                                    <pre>
                                                        <p className="baclCode">function Welecome(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return &lt;h1&gt;Hello,&#123;props.name&#125;&lt;&frasl;h1&gt;</p>
                                                        <p>}</p>
                                                        <p className="baclCode">const element=&lt;Welcome name="Sara"&frasl;&gt; ;</p>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;element,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>)</p>
                                                    </pre>
                                                    <p><a className="aColor" href={this.state.codepenhref+"YGYmEG?editors=0010"}>用CodePen测试代码</a></p>
                                                    <p>
                                                        我们简单分析一下这个案例中发生了什么：
                                                    </p>
                                                    <ul>
                                                        <li>我们通过 <code>&lt;Welcome name="Sara"&frasl;&gt;</code>元素调用了 <code>ReactDOM.render()</code>.</li>
                                                        <li>React调用 <code>Welcome</code>组件，把 <code>&#123;name="Sara"&#125;</code>作为props.</li>
                                                        <li><code>Welcome</code>组件把 <code>&lt;h1&gt;Hello,Sara&lt;&frasl;h1&gt;</code>元素作为结果返回.</li>
                                                        <li>React DOM立即匹配 <code>&lt;h1&gt;Hello,Sara&lt;&frasl;h1&gt;</code>更新DOM.</li>
                                                    </ul>
                                                    <Well>
                                                        <h4>警告</h4>
                                                        <p>组件首字母必须大写。</p>
                                                    </Well>
                                                </div>
                                                <h3>构造组件</h3>
                                                <div className="divBoxB">
                                                    <p>
                                                        组件可以引用其他组件的输出。这使得我们可以对任一级的详情使用相同的组件抽象。
                                                        button，form，dialog,screen,在React app里，所有这些通常都作为组件使用。
                                                    </p>
                                                    <p>例如，我们可以创建一个 <code>App</code>组件来多次渲染 <code>Welcome</code>:</p>
                                                    <pre>
                                                        <p>function Welcome(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return &lt;h1&gt;Hello,&#123;props.name&#125;&lt;&frasl;h1&gt;</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>function App()&#123;</p>
                                                        <p>&nbsp;&nbsp;return(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Sara"&frasl;&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Cahal"&frasl;&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Edite"&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>ReactDOM.render(</p>
                                                        <p>&nbsp;&nbsp;&lt;App&frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <p>
                                                        <a className="aColor" href={this.state.codepenhref+"KgQKPr?editors=0010"}>用CodePen测试代码</a>
                                                    </p>
                                                    <p>
                                                        React的特色是在新创建的app的底层有一个 <code>App</code>的组件。但是，你如果想把React整合到已有的app内，
                                                        你可以用类似 <code>Button</code>的小组件自下而上的，逐步的排除困难向更高的视图层次结构前进。
                                                    </p>
                                                    <Well>
                                                        <h4>警告</h4>
                                                        <p>
                                                            组件必须返回一个单一的根元素。这就是我们用一个 <code>&lt;div&gt;</code>包裹 <code>&lt;Welecome&frasl;&gt;</code>元素的原因。
                                                        </p>
                                                    </Well>
                                                </div>
                                                <h3>提取组件</h3>
                                                <div className="divBoxB">
                                                    <p>不用担心把组件分割成更小的组件。</p>
                                                    <p>例如，思考一下这个 <code>Comment</code>组件</p>
                                                    <pre>
                                                        <p>function Comment(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img className="Avatar"</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&#123;props.author.avatarUrl&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&#123;props.author.name&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo-name"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.author.name&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-text"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-date"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;formatDate(props.date)&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        <a className="aColor" href={this.state.codepenhref+"VKQwEo?editors=0010"}>用CodePen测试代码</a>
                                                    </p>
                                                    <p>
                                                        上面的例子接收了 <code>author</code>(一个对象)，<code>text</code>(一个文本)和<code>date</code>(一个字符串)作为属性，并描述社交媒体网站上的一个评论。
                                                    </p>
                                                    <p>
                                                        这个组件因为所有嵌套的原因很难改变，并且它里面的单一个体的复用性差。我们来提取几个组件。
                                                    </p>
                                                    <p>首先提取 <code>Avatar</code>:</p>
                                                    <pre>
                                                        <p>function Avatar(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;img className="Avatar"</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&#123;props.user.avatarUrl&#125;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&#123;props.user.name&#125;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        <code>Avatar</code>不需要知道它正被渲染进 <code>Comment</code>。
                                                        这就是我们给予它的props一个更广义的名字：<code>user</code>而不是 <code>author</code>.
                                                    </p>
                                                    <p>
                                                        我们推荐从组件自己的角度来为props命名，而不是它未来被使用的环境的角度。
                                                    </p>
                                                    <p>现在我们可以稍微简化一点 <code>Comment</code>:</p>
                                                     <pre>
                                                        <p>function Comment(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo"&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar user=&#123;props.author&#125;&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo-name"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.author.name&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-text"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-date"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;formatDate(props.date)&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>下面，我们来提取 <code>UserInfo</code>组件，它会渲染一个紧挨着用户名字的 <code>Avatar</code>组件：</p>
                                                    <pre>
                                                        <p>function UserInfo(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo"&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar user=&#123;props.user&#125;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="UserInfo-name"&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.user.name&#125;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>这样我们可以更近一步的简化 <code>Comment</code>:</p>
                                                    <pre>
                                                        <p>function Comment(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment"&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;UserInfo user=&#123;props.author&#125;&frasl;&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-text"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="Comment-date"&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;formatDate(props.date)&#125;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        <a className="aColor" href={this.state.codepenhref+"rrJNJY?editors=0010"}>用CodePen测试代码</a>
                                                    </p>
                                                    <p>
                                                        开始时，提取组件可能觉得有些乏味，但是在更大的app里有一个复用组件库是值得的。
                                                        一个好的经验法则是，你的UI的某一部分是否可以多次调用(<code>Button,Panel,Avatar</code>),
                                                        或者就自身而言足够复杂(<code>App,FeedStory,Comment</code>),
                                                        成为可重用的组件才是一个合格的候选者。
                                                    </p>
                                                </div>
                                                <h3>Props都是只读的</h3>
                                                <div className="divBoxB">
                                                    <p>
                                                        无论你声明一个组件
                                                        <a className="aColor" href={this.state.reacthref+"docs/components-and-props.html#functional-and-class-components"}> 作为一个函数或者一个类</a>，
                                                        它绝不能修改自己的props.
                                                    </p>
                                                    <p>思考这个 <code>sum</code>函数：</p>
                                                    <pre>
                                                        <p>function sum(a,b)&#123;</p>
                                                        <p>&nbsp;&nbsp;return a+b;</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        这样的函数被称为“pure(纯净的)”，因为它们没有试图改变它们的输入值，并且总是因为相同的输入值返回相同的结果。
                                                    </p>
                                                    <p>与此相反，下面这个函数是不纯净的，因为它改变了自己的输入值：</p>
                                                    <pre>
                                                        <p>function withdraw(account,amount)&#123;</p>
                                                        <p>account.total-=amount;</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        React的确很灵活但是也有一个独立的严格的法则：
                                                    </p>
                                                    <h4 className="backCode">所有的React组件必须像纯函数一样尊敬它们的props。即:props不可修改。</h4>
                                                    <p>
                                                        当然了，程序的UI是动态的并且随时间变化的。下一节，我们会介绍一个新的概念“state”.
                                                        state允许React组件在响应用户需求，网络请求和任何其他需求时，随时改变它们的输出，不需要违反这条规则。
                                                    </p>
                                                </div>
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
                                                    <p>就是通过调用 <code className="codeColor">ReactDOM.render()</code>来改变已渲染的输出内容。</p>
                                                    <pre>
                                                        <p>function tick()&#123;</p>
                                                        <p>&nbsp;&nbsp;const element=(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;new Date().toLocaleTimeString()&#125;&lt;&frasl;h2&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <br/>
                                                        <p className="backCode">&nbsp;&nbsp;ReactDOM.render(</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;element,</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p className="backCode">&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>setInterval(tick,1000);</p>
                                                    </pre>
                                                    <p><a className="aColor" href={this.state.codepenhref+"gwoJZk?editors=0010"}>用CodePen测试代码</a></p>
                                                    <p>
                                                        在这部分，我们将学习如何使 <code>Clock</code>组件真正的实现复用和封装。
                                                        它会设置自己的定时器并且实现每一秒的自我更新。
                                                    </p>
                                                    <p>
                                                        封装代码如下：
                                                    </p>
                                                    <pre>
                                                        <p>function Clock(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;return (</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;props.date.toLocaleTimeString()&#125;&lt;&frasl;h2&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>function tick()&#123;</p>
                                                        <p>&nbsp;&nbsp;ReactDOM.render(</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;Clock date=&#123;new Date()&#125;&frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>setInterval(tick,1000)</p>
                                                    </pre>
                                                    <p><a className="aColor" href={this.state.codepenhref+"dpdoYR?editors=0010"}>用CodePen测试代码</a></p>
                                                    <p>但是，上面的代码忽视了一个重要的要求：事实上应该是 <code>Clock</code>设置一个计时器，并且每一秒都更新用户界面.</p>
                                                    <p>理想的情况是，我们指定一次，然后让 <code>Clock</code>实现自己更新：</p>
                                                    <pre>
                                                        <p>ReactDOM.render(</p>
                                                        <p className="backCode">&nbsp;&nbsp;&lt;Clock&frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>);</p>
                                                    </pre>
                                                    <p>为了实现上面的想法，我们需要给 <code>Clock</code>组件添加“state”.</p>
                                                    <p>state和props类似，但是它是私有的，并且完全受组件控制。</p>
                                                    <p>
                                                        我们 <a href={this.state.reacthref+"docs/components-and-props.html#functional-and-class-components"}>之前说过</a>
                                                        component定义为class有一些额外的特性。
                                                    </p>
                                                    <p>实际情况则是：特性仅适用于class</p>
                                                </div>
                                                <h3>把Function转化成Class</h3>
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
                                                    <pre>
                                                        <p>class Clock extends React.Component&#123;</p>
                                                        <p>&nbsp;&nbsp;render()&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;return(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;this.props.date.toLocaleTimeString()&#125;&lt;&frasl;h2&gt;.</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p><a className="aColor" href={this.state.codepenhref+"zKRGpo?editors=0010"}>用CodePen测试代码</a></p>
                                                    <p>现在<code>Clock</code>就被定义为了一个classe而不是function.</p>
                                                    <p>这样我们就可以使用附加的特性了，比如：local state和liffcycle hooks.(生命周期函数钩子)</p>
                                                </div>
                                                <h3>添加Local State 到 Class</h3>
                                                <div className="divBoxB">
                                                    <p>我们将通过三步把 <code>date</code>从props移动到state:</p>
                                                    <p>1)在 <code>render()</code>方法中，用 <code>this.state.date</code>替换掉 <code>this.props.date</code>:</p>
                                                    <pre>
                                                        <p>class Clock extends React.Component&#123;</p>
                                                        <p>&nbsp;&nbsp;render()&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;return(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;this.state.date.toLocaleTimeString()&#125;&lt;&frasl;h2&gt;.</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>
                                                        2)添加 <a className="aColor" href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor">class constructor</a>
                                                        来分派初始的 <code>this.state</code>
                                                    </p>
                                                    <pre>
                                                        <p>class Clock extends React.Component&#123;</p>
                                                        <p>&nbsp;&nbsp;constructor(props)&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;super(props);</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;this.state=&#123;date:new Date()&#125;;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <br/>
                                                        <p>&nbsp;&nbsp;render()&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;return(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;this.state.date.toLocaleTimeString()&#125;&lt;&frasl;h2&gt;.</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p>}</p>
                                                    </pre>
                                                    <p>记录如何将<code>props</code>传递给基层的constructor:</p>
                                                    <pre>
                                                        <p>&nbsp;&nbsp;constructor(props)&#123;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;super(props);</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.state=&#123;date:new Date()&#125;;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                    </pre>
                                                    <p>
                                                        Class组件会一直调用携带有 <code>props</code>的基层constructor。
                                                    </p>
                                                    <p>3)删除<code>Clock</code>元素中的<code>date</code>属性：</p>
                                                    <pre>
                                                        <p>&nbsp;&nbsp;ReactDOM.render(</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;Clock &frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                    </pre>
                                                    <p>
                                                        结果就是这样的：
                                                    </p>
                                                    <pre>
                                                        <p>class Clock extends React.Component&#123;</p>
                                                        <p className="backCode">&nbsp;&nbsp;constructor(props)&#123;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;super(props);</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;this.state=&#123;date:new Date()&#125;;</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <br/>
                                                        <p>&nbsp;&nbsp;render()&#123;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;return(</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,world!&lt;&frasl;h1&gt;</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;It is &#123;this.state.date.toLocaleTimeString()&#125;&lt;&frasl;h2&gt;.</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;div&gt;</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
                                                        <p>&nbsp;&nbsp;}</p>
                                                        <p>}</p>
                                                        <br/>
                                                        <p>&nbsp;&nbsp;ReactDOM.render(</p>
                                                        <p className="backCode">&nbsp;&nbsp;&nbsp;&nbsp;&lt;Clock &frasl;&gt;,</p>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root')</p>
                                                        <p>&nbsp;&nbsp;);</p>
                                                    </pre>
                                                    <p><a className="aColor" href={this.state.codepenhref+"KgQpJd?editors=0010"}>用CodePen测试代码</a></p>
                                                </div>
                                                <p>接下来，我们就要给<code>Clock</code>设置自己的计时器，并实现实时自我更新。</p>
                                                <h3>添加Lifrcycle Methods到Class</h3>
                                                <div className="divBoxB">

                                                </div>
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