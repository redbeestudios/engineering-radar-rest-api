import {FlagType, Tecnology} from "../../domain/technology.model";

export const dataMock: Tecnology = {
  "items": [
    {
      "flag":  FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "adr",
          "release": "2018-03-01",
          "title": "ADR",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\adr.md",
          "body": "<p>Architecture Decision Records</p>\n<p>ADR is a lightweight documentation of important architecture decisions taken by the team.\nWithout documentation of the architecture and the architecture decisions, new team members can only do two things:</p>\n<ul>\n<li>either (blindy) accept what they find and see or</li>\n<li>(blindy) change things</li>\n</ul>\n<p>It goes without saying that both options aren&#39;t right.</p>\n<p>Therefore, we suggest documenting the important architecture decisions. We use a simple tool such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/npryce/adr-tools\">https://github.com/npryce/adr-tools</a> and store them in version control.\nIn larger projects with many teams we also establish a regular &quot;architecture board / COI&quot; with regular meetings.\nOften, the architecture decisions are taken in such meetings.</p>\n<p>The main purpose of this documentation is to:</p>\n<ul>\n<li>inform new team members about the previous architecture decisions and their purpose and backgrounds</li>\n<li>inform the whole team (including all people who were absent)</li>\n<li>create documentation that can be used to remember things (e.g. conventions, patterns, etc.)</li>\n</ul>\n"
        }
      ],
      "name": "adr",
      "title": "ADR",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>Architecture Decision Records</p>\n<p>ADR is a lightweight documentation of important architecture decisions taken by the team.\nWithout documentation of the architecture and the architecture decisions, new team members can only do two things:</p>\n<ul>\n<li>either (blindy) accept what they find and see or</li>\n<li>(blindy) change things</li>\n</ul>\n<p>It goes without saying that both options aren&#39;t right.</p>\n<p>Therefore, we suggest documenting the important architecture decisions. We use a simple tool such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/npryce/adr-tools\">https://github.com/npryce/adr-tools</a> and store them in version control.\nIn larger projects with many teams we also establish a regular &quot;architecture board / COI&quot; with regular meetings.\nOften, the architecture decisions are taken in such meetings.</p>\n<p>The main purpose of this documentation is to:</p>\n<ul>\n<li>inform new team members about the previous architecture decisions and their purpose and backgrounds</li>\n<li>inform the whole team (including all people who were absent)</li>\n<li>create documentation that can be used to remember things (e.g. conventions, patterns, etc.)</li>\n</ul>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\adr.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "akeneo",
          "release": "2021-01-01",
          "title": "Akeneo",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\akeneo.md",
          "body": "<p>We continue to use Akeneo with a variety of customers to store and process product data in a standardized format. It is the de facto standard for open source PIM&#39;s and therefore an integral part of our e-commerce solutions.</p>\n<p>In the meantime, Akeneo has been continuously developed and offers many new features that further facilitate product data collection.</p>\n<p>The recent switch to Elasticsearch and an update of Symfony improved runtime behaviour as well as scalability for future-prove use. Support for the latest release of PHP 8 is upcoming.</p>\n"
        },
        {
          "name": "akeneo",
          "release": "2017-03-01",
          "title": "Akeneo",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\akeneo.md",
          "body": "<p>Akeneo is a Product Information Management system (also known as PIM, PCM or Product MDM) and helps centralize and harmonize all the technical and marketing information of products.</p>\n<p>We use Akeneo with success in our projects and products (For example in OM3), where it is responsible for:</p>\n<ul>\n<li>  Keeping product data separate from other applications - such as E-Commerce systems</li>\n<li>  Managing livecycles of products and managing product portfolios with their category structures</li>\n<li>  Managing attributes and families and therefore acting as attribute master for the suite</li>\n</ul>\n<p>The system has a modern and friendly user interface and product managers find things such as completenesscheck, translation views and mass editing very helpful.</p>\n<p>With delta export and import capabilities and the usage of Mongo DB as persitence backend, the performance is acceptable. We miss a richer API - but the system is extendable and based on PHP/Symfony 2.</p>\n"
        }
      ],
      "name": "akeneo",
      "title": "Akeneo",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>We continue to use Akeneo with a variety of customers to store and process product data in a standardized format. It is the de facto standard for open source PIM&#39;s and therefore an integral part of our e-commerce solutions.</p>\n<p>In the meantime, Akeneo has been continuously developed and offers many new features that further facilitate product data collection.</p>\n<p>The recent switch to Elasticsearch and an update of Symfony improved runtime behaviour as well as scalability for future-prove use. Support for the latest release of PHP 8 is upcoming.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\akeneo.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "akka",
          "release": "2017-03-01",
          "title": "Akka",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\akka.md",
          "body": "<p>With the growing adoption of microservice-based architecures, the interest in frameworks and tools that make building systems that follow the reactive manifesto possible has increased.</p>\n<p>Akka provides you a toolkit and runtime based on the Actor model known from Erlang to reach this goal.</p>\n<p>It&#39;s one of the most-adopted toolkits in its space with its key contributors beeing heavily involved in the overall movement of the reactive community as well.\nAt AOE, we use Akka when we need high-performance, efficient data processing or where its finite state machine plays nicely with the domain of the application. It is worth mentioning that the actor model might come with extra complexity and therefore should be used in problem spaces where the advantages of this approach bring enough value and no accidental complexity.</p>\n"
        }
      ],
      "name": "akka",
      "title": "Akka",
      "ring": "trial",
      "quadrant": "languages-and-frameworks",
      "body": "<p>With the growing adoption of microservice-based architecures, the interest in frameworks and tools that make building systems that follow the reactive manifesto possible has increased.</p>\n<p>Akka provides you a toolkit and runtime based on the Actor model known from Erlang to reach this goal.</p>\n<p>It&#39;s one of the most-adopted toolkits in its space with its key contributors beeing heavily involved in the overall movement of the reactive community as well.\nAt AOE, we use Akka when we need high-performance, efficient data processing or where its finite state machine plays nicely with the domain of the application. It is worth mentioning that the actor model might come with extra complexity and therefore should be used in problem spaces where the advantages of this approach bring enough value and no accidental complexity.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\akka.md"
    },
    {
      "flag":  FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "akka-streams",
          "release": "2019-11-01",
          "title": "Akka Streams",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\akka-streams.md",
          "body": "<p>Updated to &quot;adopt&quot;</p>\n"
        },
        {
          "name": "akka-streams",
          "release": "2018-03-01",
          "title": "Akka Streams",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\akka-streams.md",
          "body": "<p>In our backend services, we frequently encounter the task to transform data\ncoming from and uploading to external sources and services.</p>\n<p>Building more complex data transformation processes with Akka Actors has proven\nvery difficult for us in the past.</p>\n<p>Seeing this data as a stream of elements could allow handling them piece by\npiece and only keeping as much of the data in-process as can currently be\nhandled.</p>\n<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://doc.akka.io/docs/akka/current/scala/stream/index.html\">Akka Streams</a> is\na <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.reactive-streams.org/\">Reactive Streams</a> implementation that\nprovides a very end-user friendly API for setting up streams for data\nprocessing that are bounded in resource usage and efficient.  It uses the Akka\nActor Framework to execute these streams in an asynchronous and parallel\nfashion exploiting today&#39;s multi-core architectures without having the user to\ninteract with Actors directly. It handles things such as message resending in\nfailure cases and preventing message overflow. It is also interoperable with\nother Reactive Streams implementations.</p>\n<p>Our first trials with Akka Streams were promising but we haven&#39;t yet implemented\ncomplex services with it.</p>\n<p>We will continue looking into it together with the\n<a href=\"/techradar/languages-and-frameworks/alpakka.html\">Alpakka</a> Connectors for integration\nwork.</p>\n"
        }
      ],
      "name": "akka-streams",
      "title": "Akka Streams",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Updated to &quot;adopt&quot;</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\akka-streams.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "alpakka",
          "release": "2019-11-01",
          "title": "Alpakka",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\alpakka.md",
          "body": "<p>Updated to &quot;adopt&quot;</p>\n"
        },
        {
          "name": "alpakka",
          "release": "2018-03-01",
          "title": "Alpakka",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\alpakka.md",
          "body": "<p>When using <a href=\"/techradar/languages-and-frameworks/akka-streams.html\">Akka Streams</a> to build\nreactive data transformation services you usually need to connect to several\ndifferent services such as FTP, S3 buckets, AMQP brokers or different databases.</p>\n<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.lightbend.com/docs/alpakka/current/\">Alpakka</a> provides\nintegration building blocks for Akka Streams to access these services in a\nreactive fashion and contains transformations for working with XML, CSV or\nJSON structured data.</p>\n<p>Combined, Akka Streams and Alpakka enable us to build small reactive\nintegration services with minimal resource consumption and good performance, and\nare a good alternative to larger ESB solutions or integration tools.</p>\n"
        }
      ],
      "name": "alpakka",
      "title": "Alpakka",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Updated to &quot;adopt&quot;</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\alpakka.md"
    },
    {
      "flag":FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "angular",
          "release": "2021-01-01",
          "title": "Angular",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\angular.md",
          "body": "<p>Actually in version 11 Angular has become an adult SPA framework with much faster build time and significant smaller\nproduction builds. Updating to newer versions has become mostly a &quot;no-brainer&quot; which helps us to integrate latest\ncommunity bug-fix &amp; improvements on a friday during a cup of coffee. Angular ships as a fully integrated development\nplatform from scaffolding, code generation, routing, guarding, unit/e2e-testing, multi language builds (i18n) and stable\ndev/build processes and keeping it extensible at the same time. This &quot;ganzheitlichkeit&quot; makes Angular in the beginning\nway more difficult to learn but once understood it&#39;s a great candidate to go very fast into &quot;requirement implementation&quot;\naka early providing value rather than library wiring. Beside the existing telco-industry projects we&#39;ve actually also\nchosen Angular for resource critical industry 4.0 / embedded projects. Here we&#39;ve selected Angular beside the\nperformance aspects to fulfill requirements like adaptive multi device support (custom hardware buttons, tablets and\nlaptops) on the one hand and on the other hand to reduce the risk loosing time by having too many self-managed external\ndependencies.</p>\n"
        },
        {
          "name": "angular",
          "release": "2018-03-01",
          "title": "Angular",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\angular.md",
          "body": "<p>In addition to numerous major upgrades from version 2 to 5, which often needed a &quot;hands-on&quot; approach, a lot has happened in the Angular \necosystem in 2017. Specifically, the improvements in the HTTP-Client, which now requires less coding effort. Or \nthe vast improvements on angular.cli such as aot (ahead of time compile) for faster rendering, fewer requests and \nmuch smaller builds, to just name the most important ones.</p>\n<p>We have achieved particularly good results using Angular in large and medium-size projects. Actually, \nit&#39;s our framework-of-choice in our telecommunication sector teams as a single-page application framework (SPA) for microservice front \nends.</p>\n<p>The convenient scaffolding of unit- and end-to-end-tests provides a quality-driven workflow.\nAlso, the module- and component architecture helps to keep the codebase understandable end maintainable.</p>\n"
        },
        {
          "name": "angular",
          "release": "2017-03-01",
          "title": "Angular",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\angular.md",
          "body": "<p>The latest version of the Angular Framework, which is used for large single-page applications.</p>\n<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://angular.io/\">Angular</a> is a complete rewrite of Angular 1 — many things have changed compared to the first version. The latest best practices and toolings from the JavaScript community have found their way into Angular.</p>\n<p>It supports DI (dependency injection), it has a clean inheritance and a good separation of concerns. Angular follows the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.w3.org/standards/techs/components#w3c_all\">web component standards</a> to avoid negative side effects between components.</p>\n<p>We think that Angular is well-structured on both a development and an application level.</p>\n<p>When talking about Angular, we must consider the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cli.angular.io/\">angular.cli</a> as well, which provides a huge level of intelligent automation along the development process and project setup.</p>\n"
        }
      ],
      "name": "angular",
      "title": "Angular",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Actually in version 11 Angular has become an adult SPA framework with much faster build time and significant smaller\nproduction builds. Updating to newer versions has become mostly a &quot;no-brainer&quot; which helps us to integrate latest\ncommunity bug-fix &amp; improvements on a friday during a cup of coffee. Angular ships as a fully integrated development\nplatform from scaffolding, code generation, routing, guarding, unit/e2e-testing, multi language builds (i18n) and stable\ndev/build processes and keeping it extensible at the same time. This &quot;ganzheitlichkeit&quot; makes Angular in the beginning\nway more difficult to learn but once understood it&#39;s a great candidate to go very fast into &quot;requirement implementation&quot;\naka early providing value rather than library wiring. Beside the existing telco-industry projects we&#39;ve actually also\nchosen Angular for resource critical industry 4.0 / embedded projects. Here we&#39;ve selected Angular beside the\nperformance aspects to fulfill requirements like adaptive multi device support (custom hardware buttons, tablets and\nlaptops) on the one hand and on the other hand to reduce the risk loosing time by having too many self-managed external\ndependencies.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\angular.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "ant",
          "release": "2017-03-01",
          "title": "Ant",
          "ring": "hold",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\ant.md",
          "body": "<p>Apache Ant was build in 1997 to have something like Make in the C/C++ world for Java. Ant uses xml files to describe steps required to produce executable artifacts from source code. The main concepts of tasks and targets are programmable in an imperative style.</p>\n<p>Apache Ant was and is widely used by large software projects. Our recommendation is to stop using Apache Ant for new projects. If you are free to choose, we recommend Gradle as an Apache Ant replacement.</p>\n"
        }
      ],
      "name": "ant",
      "title": "Ant",
      "ring": "hold",
      "quadrant": "tools",
      "body": "<p>Apache Ant was build in 1997 to have something like Make in the C/C++ world for Java. Ant uses xml files to describe steps required to produce executable artifacts from source code. The main concepts of tasks and targets are programmable in an imperative style.</p>\n<p>Apache Ant was and is widely used by large software projects. Our recommendation is to stop using Apache Ant for new projects. If you are free to choose, we recommend Gradle as an Apache Ant replacement.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\ant.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "anypoint-platform",
          "release": "2019-11-01",
          "title": "Anypoint platform",
          "ring": "trial",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\anypoint-platform.md",
          "body": "<p>Recently our teams migrated some project from anypoint to <a href=\"/techradar/tools/apache-camel.html\">&quot;Apache Camel&quot;</a> or use <a href=\"/techradar/tools/alpakka.html\">&quot;Alpakka&quot;</a> for integration work. </p>\n"
        },
        {
          "name": "anypoint-platform",
          "release": "2017-03-01",
          "title": "Anypoint platform",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\anypoint-platform.md",
          "body": "<p>Anypoint platform (formally known as Mule or Mule ESB) is an Enterprise Integration Platform written in Java.</p>\n<p>Anypoint provide tools to use Enterprise Integration Patterns (EAI) and has a high number of ready-to-use connectors to communicate with software tools such as SAP, Salesforce, etc.</p>\n<p>Anypoint Community Version is Open Source and contribution is possible. The platform is pluggable with own connectors. Mulesoft is also driving the <a href=\"/techradar/tools/raml.html\">raml</a> specification and related Open Source tools.</p>\n<p>AOE is a Mulesoft Partner and we use both the Community and Enterprise Versions of Anypoint. We use Anypoint as an API Gateway to combine and transform data from multiple backends. We use it as ESB or Integration platform for loose coupling of software components. And we also use it as legacy modernization to provide modern APIs for legacy- or foreign software.</p>\n"
        }
      ],
      "name": "anypoint-platform",
      "title": "Anypoint platform",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>Recently our teams migrated some project from anypoint to <a href=\"/techradar/tools/apache-camel.html\">&quot;Apache Camel&quot;</a> or use <a href=\"/techradar/tools/alpakka.html\">&quot;Alpakka&quot;</a> for integration work. </p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\anypoint-platform.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "aoe-sso",
          "release": "2019-11-01",
          "title": "AOE SSO",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\aoe-sso.md",
          "body": "<p>To improve security and user experience we decided to install an organisation wide SSO and use OpenID Connect integrate with existing tools.\nWe use <a href=\"/techradar/tools/keycloak.html\">Keycloak</a> as the SSO server, which is backed by our LDAP.\nThis also helps to implement new infrastructure security based on <a href=\"/techradar/methods-and-patterns/beyondcorp.html\">&quot;BeyondCorp&quot;</a>.</p>\n"
        }
      ],
      "name": "aoe-sso",
      "title": "AOE SSO",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>To improve security and user experience we decided to install an organisation wide SSO and use OpenID Connect integrate with existing tools.\nWe use <a href=\"/techradar/tools/keycloak.html\">Keycloak</a> as the SSO server, which is backed by our LDAP.\nThis also helps to implement new infrastructure security based on <a href=\"/techradar/methods-and-patterns/beyondcorp.html\">&quot;BeyondCorp&quot;</a>.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\aoe-sso.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "apache-camel",
          "release": "2019-11-01",
          "title": "Apache Camel",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\apache-camel.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://camel.apache.org/\">&quot;Camel&quot;</a> is an open source integration framework that empowers you to quickly and easily integrate various systems consuming or producing data.</p>\n<p>Our teams are using Apache Camel as API Gateway that offers APIs and takes care of Federation to various Backends as well as Authorisation tasks.</p>\n"
        }
      ],
      "name": "apache-camel",
      "title": "Apache Camel",
      "ring": "trial",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://camel.apache.org/\">&quot;Camel&quot;</a> is an open source integration framework that empowers you to quickly and easily integrate various systems consuming or producing data.</p>\n<p>Our teams are using Apache Camel as API Gateway that offers APIs and takes care of Federation to various Backends as well as Authorisation tasks.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\apache-camel.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "api-first-design-approach",
          "release": "2017-03-01",
          "title": "API-First Design Approach",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\api-first-design-approach.md",
          "body": "<p>The API-First Design Approach puts the API design at the beginning of the implementation without any constraints, for example, from the current IT infrastructure or the implementation itself. The idea is to design the API in a way that it serves its purpose best and the consumers are enabled to work efficiently.</p>\n<p>There are several advantages to this approach. For example, it can help to avoid reflecting the internal structure of the application or any internal constraints. Furthermore, as one of the most important design aspects is consistency, one can define features such as the behavior of security, URL schemes, and API keys upfront. It also helps speed up parallel implementation. A team that consumes the API can start working directly after the API design because it can easily be mocked.</p>\n<p>There are several tools for modelling an API, but here at AOE we mainly use <a href=\"/techradar/tools/raml.html\">RAML</a> as it provides a rich set of tools for generating documentation, mocking and more. For mocking we use <a href=\"/techradar/tools/wiremock.html\">Wiremock</a>, for example.</p>\n<p>Related to the &quot;API-First&quot; approach is the &quot;Headless&quot; approach where an existing application (with or without existing API) is used as a backend for a separate frontend. We used this with sucess for Magento-based E-Commerce platforms. This allows encapsulating the core features of that application, while integrating it into a larger landscape of components using its API as a unified way to interact between components. Decoupling the core logic from its presentation layer allows picking the best technology stack for the various parts independently.</p>\n<p>For further reading see:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.programmableweb.com/api-university/understanding-api-first-design\">Understanding API First Design</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.techradar.com/news/software/applications/when-crafting-your-api-strategy-put-design-first-1262043?src=rss&amp;attr=all\">When crafting your API strategy, put design first</a></li>\n</ul>\n"
        }
      ],
      "name": "api-first-design-approach",
      "title": "API-First Design Approach",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>The API-First Design Approach puts the API design at the beginning of the implementation without any constraints, for example, from the current IT infrastructure or the implementation itself. The idea is to design the API in a way that it serves its purpose best and the consumers are enabled to work efficiently.</p>\n<p>There are several advantages to this approach. For example, it can help to avoid reflecting the internal structure of the application or any internal constraints. Furthermore, as one of the most important design aspects is consistency, one can define features such as the behavior of security, URL schemes, and API keys upfront. It also helps speed up parallel implementation. A team that consumes the API can start working directly after the API design because it can easily be mocked.</p>\n<p>There are several tools for modelling an API, but here at AOE we mainly use <a href=\"/techradar/tools/raml.html\">RAML</a> as it provides a rich set of tools for generating documentation, mocking and more. For mocking we use <a href=\"/techradar/tools/wiremock.html\">Wiremock</a>, for example.</p>\n<p>Related to the &quot;API-First&quot; approach is the &quot;Headless&quot; approach where an existing application (with or without existing API) is used as a backend for a separate frontend. We used this with sucess for Magento-based E-Commerce platforms. This allows encapsulating the core features of that application, while integrating it into a larger landscape of components using its API as a unified way to interact between components. Decoupling the core logic from its presentation layer allows picking the best technology stack for the various parts independently.</p>\n<p>For further reading see:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.programmableweb.com/api-university/understanding-api-first-design\">Understanding API First Design</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.techradar.com/news/software/applications/when-crafting-your-api-strategy-put-design-first-1262043?src=rss&amp;attr=all\">When crafting your API strategy, put design first</a></li>\n</ul>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\api-first-design-approach.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "apollo-client",
          "release": "2019-11-01",
          "title": "Apollo Client",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\apollo-client.md",
          "body": "<p>The <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/apollographql/apollo-client\">Apollo Client</a> is a tool to efficiently work together with an GraphQL server. \nIt makes it easy to run your queries and mutations, cache results, brings tooling to download schemas and generate types to name a few of the useful features.</p>\n"
        }
      ],
      "name": "apollo-client",
      "title": "Apollo Client",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>The <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/apollographql/apollo-client\">Apollo Client</a> is a tool to efficiently work together with an GraphQL server. \nIt makes it easy to run your queries and mutations, cache results, brings tooling to download schemas and generate types to name a few of the useful features.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\apollo-client.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "artifactory",
          "release": "2018-03-01",
          "title": "Artifactory",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\artifactory.md",
          "body": "<p>Artifactory is now used in every newly started project at AOE and plays a\ncentral role as an artifact repository for libraries, applications and docker\nimages.  While cleanup is still an issue, we recommend the adoption of an\nartifact repository in all our projects.</p>\n"
        },
        {
          "name": "artifactory",
          "release": "2017-03-01",
          "title": "Artifactory",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\artifactory.md",
          "body": "<p>JFrog <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.jfrog.com/open-source/\">Artifactory </a>is a software tool, which, in the end, manages and stores (binary) artifacts.\nIn addition to storage, it provides a managing interface, which also allows to store build information, properties as well as dependencies per artifact which are organized within repositories. A fine grained security system enables easy management of which artifacts are available to whom.\nThe artifacts are exposed via an HTTP(S)-Url Artifactory, which can generate package-manager compatible manifests for the repositories. AOE utilizes Artifactory to serve Maven, Apt, Npm, Composer and Docker Repositories.</p>\n<p>In addition to storing own assets, Artifactory is able to proxy remote Repository for and cache resolved artifacts locally.\nThis results in an increased build performance and decouples builds from external service dependencies and ensures builds still work even if they utilize outdated dependencies that might not be publicly available anymore.</p>\n<p>Artifactory provides a powerful REST-API for managing Artifacts including a powerful search AQL. It is utilized to provide complex release processes based on QA-Attributes on an artifact level.</p>\n<p>Artifactory at AOE currently comes with some problems, too:</p>\n<ul>\n<li>Cleanup in Artifactory has to be done manually. Therefore, if every build is pushed to Artifactory it currently pollutes disk space since old or unused versions are never removed.</li>\n<li>The Composer Integration mirroring github proves to be slower than directly connecting to github.</li>\n</ul>\n<p>AOE is using the Professional version for a central instance that can be used by different teams. We encourage teams to use Artifactory instead of Jenkins to store and manage build artifacts - and to take care of cleaning up old artifacts automatically.</p>\n"
        }
      ],
      "name": "artifactory",
      "title": "Artifactory",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Artifactory is now used in every newly started project at AOE and plays a\ncentral role as an artifact repository for libraries, applications and docker\nimages.  While cleanup is still an issue, we recommend the adoption of an\nartifact repository in all our projects.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\artifactory.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "asciidoc",
          "release": "2019-11-01",
          "title": "AsciiDoc",
          "ring": "assess",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\asciidoc.md",
          "body": ""
        },
        {
          "name": "asciidoc",
          "release": "2018-03-01",
          "title": "AsciiDoc",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\asciidoc.md",
          "body": "<p>AsciiDoc is a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Lightweight_markup_language\">lightweight markup language</a> such as Markdown. \nWith a concise Syntax, it supports more features than Markdown without extensions such as Tables and Table of Contents.\nIt&#39;s easy to write complex documentation with AsciiDoc. And with Asciidoctor you can export your text to Pdf, HTML, etc.</p>\n<p>At AOE, we use AsciiDoc for Documentation in our Repositories.</p>\n"
        }
      ],
      "name": "asciidoc",
      "title": "AsciiDoc",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>AsciiDoc is a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Lightweight_markup_language\">lightweight markup language</a> such as Markdown. \nWith a concise Syntax, it supports more features than Markdown without extensions such as Tables and Table of Contents.\nIt&#39;s easy to write complex documentation with AsciiDoc. And with Asciidoctor you can export your text to Pdf, HTML, etc.</p>\n<p>At AOE, we use AsciiDoc for Documentation in our Repositories.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\asciidoc.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "aws-lambda",
          "release": "2019-11-01",
          "title": "AWS Lambda",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\aws-lambda.md",
          "body": ""
        },
        {
          "name": "aws-lambda",
          "release": "2017-03-01",
          "title": "AWS Lambda",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\aws-lambda.md",
          "body": "<p>AWS Lambda is one of the exciting new &quot;cloud-native&quot; / serverless ways to run code without worrying about infrastructure. While it is possible to directly respond to web requests using the API Gateway, our teams are currently using AWS Lambda mostly for tasks outside the critical path. As a custom resource for CloudFormation, it allows us to manage all aspects of a deployment in an elegant way by simply deploying a new CloudFormation stack. Baking AMIs and doing green/blue switches are only two of the many use cases where AWS Lambda comes in very handy.</p>\n<p>In addition to deployment automation, we&#39;re using AWS Lambda to process incoming data. Being able to respond to events from various sources such as S3 Buckets, SNS topics, Kinesis streams and HTTP endpoints it&#39;s a perfect match to process, transform and forward incoming data in near-realtime at a fraction of the cost of running an ESB.</p>\n"
        }
      ],
      "name": "aws-lambda",
      "title": "AWS Lambda",
      "ring": "trial",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>AWS Lambda is one of the exciting new &quot;cloud-native&quot; / serverless ways to run code without worrying about infrastructure. While it is possible to directly respond to web requests using the API Gateway, our teams are currently using AWS Lambda mostly for tasks outside the critical path. As a custom resource for CloudFormation, it allows us to manage all aspects of a deployment in an elegant way by simply deploying a new CloudFormation stack. Baking AMIs and doing green/blue switches are only two of the many use cases where AWS Lambda comes in very handy.</p>\n<p>In addition to deployment automation, we&#39;re using AWS Lambda to process incoming data. Being able to respond to events from various sources such as S3 Buckets, SNS topics, Kinesis streams and HTTP endpoints it&#39;s a perfect match to process, transform and forward incoming data in near-realtime at a fraction of the cost of running an ESB.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\aws-lambda.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "axure",
          "release": "2018-03-01",
          "title": "Axure",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\axure.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.axure.com/\">Axure</a> is a tool that enables the creation of flowcharts, wireframes, mockups, user journeys and more.\nThrough features such as conditional logic, dynamic content and animations it is possible to create highly functional and rich UI prototypes, which convey a realistic look and feel as to how the application to be developed should behave and look.</p>\n<p>We at AOE have used Axure successfully in several projects and it helped us a lot, particularly:</p>\n<ul>\n<li>as a basis for discussing how features should look, feel and work with customers</li>\n<li>as a basis for customers&#39; discussions with other stakeholders</li>\n<li>as a basis for discussion and specifications for developers as to how features should look and behave</li>\n</ul>\n<p>In conclusion, Axure is a great tool that provides all stakeholders with a common understanding and helped us a lot to specify requirements and find their implications.</p>\n"
        }
      ],
      "name": "axure",
      "title": "Axure",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.axure.com/\">Axure</a> is a tool that enables the creation of flowcharts, wireframes, mockups, user journeys and more.\nThrough features such as conditional logic, dynamic content and animations it is possible to create highly functional and rich UI prototypes, which convey a realistic look and feel as to how the application to be developed should behave and look.</p>\n<p>We at AOE have used Axure successfully in several projects and it helped us a lot, particularly:</p>\n<ul>\n<li>as a basis for discussing how features should look, feel and work with customers</li>\n<li>as a basis for customers&#39; discussions with other stakeholders</li>\n<li>as a basis for discussion and specifications for developers as to how features should look and behave</li>\n</ul>\n<p>In conclusion, Axure is a great tool that provides all stakeholders with a common understanding and helped us a lot to specify requirements and find their implications.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\axure.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "babel",
          "release": "2018-03-01",
          "title": "Babel",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\babel.md",
          "body": "<p>We have been using babel for some time now. Since we have started using it, we don&#39;t have to\nstruggle with unimplemented features of ECMAScript. In this regard, JavaScript is\nJavaScript, no matter what browser you are using. We we strongly recommend \nusing Babel or similar solutions (e.g. TypeScript).</p>\n"
        },
        {
          "name": "babel",
          "release": "2017-03-01",
          "title": "Babel",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\babel.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://babeljs.io/\">Babel</a> gives you the possibility to use the latest features from JavaScript (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/ECMAScript\">ECMAScript</a>) in the browser of your choice.</p>\n<p>Without Babel you had to use the feature set of your oldest browser or use feature detections such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://modernizr.com/\">modernizr</a> or write polyfills on your own.</p>\n<p>In general, Babel is split in 2 ways to bring you the new goodies you want.</p>\n<ol>\n<li><p>New syntax will be compiled to old EcmaScript 5 code e.g.:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">arrow-functions</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator\">generators</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment\">destructuring</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals\">template literals</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://babeljs.io/learn-es2015/\">...</a></li>\n</ul>\n</li>\n<li><p>New globals and functions are provided by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://babeljs.io/docs/usage/polyfill/\">babel-polyfill</a> e.g.:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise\">Promise</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find\">Array.find</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes\">Array.includes</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/zloirock/core-js#index\">...</a></li>\n</ul>\n</li>\n</ol>\n<p>The configuration is really simple due to the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://babeljs.io/docs/plugins/\">plugin system</a>. You can choose which ECMAScript version and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://babeljs.io/docs/plugins/#presets\">stage presets</a> you want to use.</p>\n<ul>\n<li>for the latest ECMAScript version use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://babeljs.io/docs/plugins/preset-env/\">babel-preset-env</a></li>\n<li>for version 2015 only use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://babeljs.io/docs/plugins/preset-es2015/\">babel-preset-2015</a></li>\n</ul>\n<p>To know what you need you can practice ECMAScript 6 by doing it with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://es6katas.org/\">es6katas</a> and ask <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://caniuse.com/\">caniuse</a>.</p>\n<p>If you are using <a href=\"/techradar/languages-and-frameworks/typescript.html\">TypeScript</a>, Babel is not necessary since you already get the new features with TypeScript.</p>\n"
        }
      ],
      "name": "babel",
      "title": "Babel",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>We have been using babel for some time now. Since we have started using it, we don&#39;t have to\nstruggle with unimplemented features of ECMAScript. In this regard, JavaScript is\nJavaScript, no matter what browser you are using. We we strongly recommend \nusing Babel or similar solutions (e.g. TypeScript).</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\babel.md"
    },
    {
      "flag": FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "beyondcorp",
          "release": "2021-01-01",
          "title": "ZeroTrust",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\beyondcorp.md",
          "body": "<p>Updated to &quot;Adopt&quot;.</p>\n"
        },
        {
          "name": "beyondcorp",
          "release": "2019-11-01",
          "title": "ZeroTrust",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\beyondcorp.md",
          "body": "<p>ZeroTrust is a paradigm where no trust is assumed inside a known network, frameworks such as Google&#39;s BeyondCorp are build upon that pattern.\nWith the surge of cloud technologies and micro services the network perimeter is ever disappearing. \nThis provides challenges for authentication of subjects that used to heavily rely on network segments.\nWith Zero Trust no assumption is made about how far something can be trusted, everything is untrusted by default and authentication and authorisation happens all the time, not just once.\nWhile network segments and VPN connections may still have relevance in specific areas AOE is increasingly implementing BeyondCorp in all its components and services with implementing OAuth and OpenID Connect.</p>\n"
        }
      ],
      "name": "beyondcorp",
      "title": "ZeroTrust",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Updated to &quot;Adopt&quot;.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\beyondcorp.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "blameless-post-mortems",
          "release": "2019-11-01",
          "title": "Blameless Post Mortems",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\blameless-post-mortems.md",
          "body": ""
        },
        {
          "name": "blameless-post-mortems",
          "release": "2018-03-01",
          "title": "Blameless Post Mortems",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\blameless-post-mortems.md",
          "body": "<blockquote>\n<p>Failure and invention are inseparable twins.</p>\n<p>— <cite>Jeff Bezos</cite></p>\n</blockquote>\n<p>Blameless Post Mortems provide a concept of dealing with failures that inevitably occur when developing and operating complex software solutions. After any major incident or outage, the team gets together to perform an in-depth analysis of what happened and what can be done to mitigate the risk of similar issues happening in the future.</p>\n<p>Based on trust, and under the assumption that every person involved had good intentions to do the best-possible job given the information at hand, Blameless Post Mortems provide an opportunity to continuously improve the quality of software and infrastructure and the processes to deal with critical situations.</p>\n<p>The post mortem documentation usually consists of both a timeline of the events leading to an incident and the steps taken to its remediation, as well as future actions and learnings for increasing reslience and stability of our services.</p>\n<p>At AOE, we strive to conduct a Blameless Post Mortem meeting after every user-visible incident.</p>\n"
        }
      ],
      "name": "blameless-post-mortems",
      "title": "Blameless Post Mortems",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<blockquote>\n<p>Failure and invention are inseparable twins.</p>\n<p>— <cite>Jeff Bezos</cite></p>\n</blockquote>\n<p>Blameless Post Mortems provide a concept of dealing with failures that inevitably occur when developing and operating complex software solutions. After any major incident or outage, the team gets together to perform an in-depth analysis of what happened and what can be done to mitigate the risk of similar issues happening in the future.</p>\n<p>Based on trust, and under the assumption that every person involved had good intentions to do the best-possible job given the information at hand, Blameless Post Mortems provide an opportunity to continuously improve the quality of software and infrastructure and the processes to deal with critical situations.</p>\n<p>The post mortem documentation usually consists of both a timeline of the events leading to an incident and the steps taken to its remediation, as well as future actions and learnings for increasing reslience and stability of our services.</p>\n<p>At AOE, we strive to conduct a Blameless Post Mortem meeting after every user-visible incident.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\blameless-post-mortems.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "bower",
          "release": "2019-11-01",
          "title": "Bower",
          "ring": "hold",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\bower.md",
          "body": ""
        },
        {
          "name": "bower",
          "release": "2017-03-01",
          "title": "Bower",
          "ring": "hold",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\bower.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://bower.io/\">Bower</a> is a package manager for frontend resources such as JavaScript libraries and CSS frameworks. Compared to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">npm</a>, it has a somewhat different approach to loading and resolving the packages, resulting in a smaller and cleaner folder structure.</p>\n<p>In small web projects, this approach is good and sufficient, but larger projects will need more dependencies such as task runners or testing frameworks, which are not available through Bower. As most of the frontend libraries are also available through npm, it&#39;s not suprising that we ask ourselves why Bower is still needed.</p>\n<p>At AOE, we decided to use npm as the only package manager to avoid having multiple tools doing similar things. Developers only need to deal with one solution, which makes the project easier to maintain.</p>\n"
        }
      ],
      "name": "bower",
      "title": "Bower",
      "ring": "hold",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://bower.io/\">Bower</a> is a package manager for frontend resources such as JavaScript libraries and CSS frameworks. Compared to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">npm</a>, it has a somewhat different approach to loading and resolving the packages, resulting in a smaller and cleaner folder structure.</p>\n<p>In small web projects, this approach is good and sufficient, but larger projects will need more dependencies such as task runners or testing frameworks, which are not available through Bower. As most of the frontend libraries are also available through npm, it&#39;s not suprising that we ask ourselves why Bower is still needed.</p>\n<p>At AOE, we decided to use npm as the only package manager to avoid having multiple tools doing similar things. Developers only need to deal with one solution, which makes the project easier to maintain.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\bower.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "client-side-error-logging",
          "release": "2017-03-01",
          "title": "Client-side error logging",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\client-side-error-logging.md",
          "body": "<p>More and more business logic is done client-side with various web and app technologies. How do we know if everything works in production? We can easily track backend exceptions in the server logs, but what about client-side errors in the user&#39;s browser or mobile app?</p>\n<p>With client-side error logging, we send errors to a central server to see instantly what is going wrong. With this method errors can be found and resolved quickly before they affect even more users.</p>\n<p>At AOE, we use the Open Source solution <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://sentry.io/welcome/\">Sentry</a>.io. It can handle multiple projects and teams and integrates well with other services such as Mattemost/Slack and Issue Tracking Systems.</p>\n"
        }
      ],
      "name": "client-side-error-logging",
      "title": "Client-side error logging",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>More and more business logic is done client-side with various web and app technologies. How do we know if everything works in production? We can easily track backend exceptions in the server logs, but what about client-side errors in the user&#39;s browser or mobile app?</p>\n<p>With client-side error logging, we send errors to a central server to see instantly what is going wrong. With this method errors can be found and resolved quickly before they affect even more users.</p>\n<p>At AOE, we use the Open Source solution <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://sentry.io/welcome/\">Sentry</a>.io. It can handle multiple projects and teams and integrates well with other services such as Mattemost/Slack and Issue Tracking Systems.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\client-side-error-logging.md"
    },
    {
      "flag": FlagType.changed,
      "featured": false,
      "revisions": [
        {
          "name": "cockpit",
          "release": "2021-01-01",
          "title": "Cockpit",
          "ring": "hold",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\cockpit.md",
          "body": "<p>We decided to put this CMS on hold due to other - more adopted - alternatives like strapi.</p>\n"
        },
        {
          "name": "cockpit",
          "release": "2019-11-01",
          "title": "Cockpit",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\cockpit.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://getcockpit.com/\">Cockpit</a> is a self-hosted headless and api-driven content management system.</p>\n"
        }
      ],
      "name": "cockpit",
      "title": "Cockpit",
      "ring": "hold",
      "quadrant": "tools",
      "body": "<p>We decided to put this CMS on hold due to other - more adopted - alternatives like strapi.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\cockpit.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "concourse-ci",
          "release": "2019-11-01",
          "title": "Concourse",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\concourse-ci.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://concourse-ci.org/\">Concourse</a> is an open-source continuous &quot;thing-doer&quot;. It represents a general approach for automation which can be used for Continuous Integration and Continuous Delivery. Concourse CI follows a strict concept that is based on idempotency, immutability, declarative config, stateless workers, and reproducible builds. Pipelines are built on the mechanics of resources, tasks and jobs, which are all configured in one or multiple YAML files. \nConcourse claims to be &quot;simple&quot; but has a steep learning curve in the beginning till it gets simple to use.\nConcourse is used in the Congstar Team to automate infrastructure deployments.</p>\n"
        }
      ],
      "name": "concourse-ci",
      "title": "Concourse",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://concourse-ci.org/\">Concourse</a> is an open-source continuous &quot;thing-doer&quot;. It represents a general approach for automation which can be used for Continuous Integration and Continuous Delivery. Concourse CI follows a strict concept that is based on idempotency, immutability, declarative config, stateless workers, and reproducible builds. Pipelines are built on the mechanics of resources, tasks and jobs, which are all configured in one or multiple YAML files. \nConcourse claims to be &quot;simple&quot; but has a steep learning curve in the beginning till it gets simple to use.\nConcourse is used in the Congstar Team to automate infrastructure deployments.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\concourse-ci.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "consul",
          "release": "2018-03-01",
          "title": "Consul",
          "ring": "assess",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\consul.md",
          "body": ""
        },
        {
          "name": "consul",
          "release": "2017-03-01",
          "title": "Consul",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\consul.md",
          "body": "<p>Consul is a lightweight service to provide a service discovery registry with failure detection (health checks) for circuit breakers. It also provides configuration management with key/value storage.<br>The typical way to use it is that a consul master cluster takes care of the update and write processes and consul clients run locally on the apps host - data is shared accross the complete Consul cluster. The data can be accessed by using DNS and HTTP APIs.</p>\n<p>At AOE, we use Consul for settings distribution with consul-template as a way to do <a href=\"/techradar/methods-and-patterns/settings-injection.html\">Settings Injection</a> during deployment. Consul is also used as service discovery between apps inside <a href=\"/techradar/methods-and-patterns/microservices.html\">microservice</a> environments.</p>\n<p>With Vault there is another tool that can be used to manage and share secrets.</p>\n"
        }
      ],
      "name": "consul",
      "title": "Consul",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>Consul is a lightweight service to provide a service discovery registry with failure detection (health checks) for circuit breakers. It also provides configuration management with key/value storage.<br>The typical way to use it is that a consul master cluster takes care of the update and write processes and consul clients run locally on the apps host - data is shared accross the complete Consul cluster. The data can be accessed by using DNS and HTTP APIs.</p>\n<p>At AOE, we use Consul for settings distribution with consul-template as a way to do <a href=\"/techradar/methods-and-patterns/settings-injection.html\">Settings Injection</a> during deployment. Consul is also used as service discovery between apps inside <a href=\"/techradar/methods-and-patterns/microservices.html\">microservice</a> environments.</p>\n<p>With Vault there is another tool that can be used to manage and share secrets.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\consul.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "container-based-builds",
          "release": "2019-11-01",
          "title": "Container-based builds",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\container-based-builds.md",
          "body": "<p>Updated to &quot;adopt&quot;. Container based builds has getting to the defacto standard for our pipelines in <a href=\"/techradar/tools/gitlab.html\">Gitlab</a> or other CI Tools.</p>\n"
        },
        {
          "name": "container-based-builds",
          "release": "2017-03-01",
          "title": "Container-based builds",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\container-based-builds.md",
          "body": "<p>Running your builds in isolated containers keeps your build servers clean. It allows you to even run them with multiple versions of a framework or programming language. You don&#39;t need additional machines like you would for running builds with PHP5 or PHP7 at the same time or running some legacy builds.</p>\n<p>Note that you need to think about some kind of caching mechanism for your depenendies to avoid downloading them in every build, which would cause long build times.</p>\n<p>At AOE, we are currently starting to use this approach for building services and it is especially useful if your build has special dependencies. Also, it&#39;s possible to use GitLab as a build tool or use Docker with the new Jenkinspipeline. For caching we are evaluating minio as a cache server. We noticed that our builds run quite rapidly and reliably with that. Also, the complexity of the builds decreased since we don&#39;t need any workarounds, which were caused by having everything installed on one build server.</p>\n"
        }
      ],
      "name": "container-based-builds",
      "title": "Container-based builds",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Updated to &quot;adopt&quot;. Container based builds has getting to the defacto standard for our pipelines in <a href=\"/techradar/tools/gitlab.html\">Gitlab</a> or other CI Tools.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\container-based-builds.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "crc",
          "release": "2018-03-01",
          "title": "CRC Games",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\crc.md",
          "body": "<p>Class Responsibility Collaboration Card Games are a method to discuss and align the software design - especially useful for object-oriented software.</p>\n<p>A proper software design is one of the most important things to ensure the sucess and the maintainability of your software.\nEspecially for iterative development methods, where you work on a software task by task, it is important to have designs sessions that also look forward to the next iterations and the conceptional whole.</p>\n<p>And for software design to be sucessfull, it is very important that everybody (in the team) has the same understanding of the design and stands behind it.</p>\n<p>CRC sessions help to design and align the high-level object design and collaboration of your system with the whole team. During such sessions new team members can learn from the experience and explanations of tropers.</p>\n<p>This is how we often conduct a CRC Session:</p>\n<ul>\n<li>Preparation:<ul>\n<li>Make sure everybody has a high-level overview of the software (bounded context / use case overview). Because design should also focus on the long term.</li>\n<li>Choose some scenarios (such as &quot;customer adds a promoted product to cart and sees the discounts...&quot;) that you want to discuss in this session</li>\n</ul>\n</li>\n<li>Collect candidates for classes:<ul>\n<li>For the first session, it makes sense to search for potential candidates for classes.</li>\n<li>Just put them on a whiteboard. Often nouns in scenarios are good candidates.</li>\n<li>Put the most promising ones on Post-its. (You can add more at any time)</li>\n</ul>\n</li>\n<li>CRC session:<ul>\n<li>1 or 2 people stand up and try to explain the scenario with the help of the classes.</li>\n<li>This is similar to explaining a sequence diagramm and the cards are put on the table from left to right. During or after this, you can discuss design decisions and alternatives with the team.</li>\n<li>After this, someone else can stand up and present a potential alternative sequence.</li>\n<li>Once the team is aligned on a version they want to implement, it makes sense that it is repeated by different persons. Being exact is very important and avoids the situation where people can have an individual understanding of the model. The model and the collaboration lives in the heads of the people in the team – therefore it is important that everyone understands it the same way.</li>\n</ul>\n</li>\n<li>Closing:<ul>\n<li>We are often not too enthusiatic about adding a list of &quot;collaborators&quot; to the cards, since the sequence explains this very well.</li>\n<li>So just take a picture and document the result somewhere, so that you can review the status for the next CRC session.</li>\n<li>Maybe some decisions are worth being documented in your <a href=\"/techradar/methods-and-patterns/adr.html\">Architecture decision records</a></li>\n</ul>\n</li>\n</ul>\n"
        }
      ],
      "name": "crc",
      "title": "CRC Games",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>Class Responsibility Collaboration Card Games are a method to discuss and align the software design - especially useful for object-oriented software.</p>\n<p>A proper software design is one of the most important things to ensure the sucess and the maintainability of your software.\nEspecially for iterative development methods, where you work on a software task by task, it is important to have designs sessions that also look forward to the next iterations and the conceptional whole.</p>\n<p>And for software design to be sucessfull, it is very important that everybody (in the team) has the same understanding of the design and stands behind it.</p>\n<p>CRC sessions help to design and align the high-level object design and collaboration of your system with the whole team. During such sessions new team members can learn from the experience and explanations of tropers.</p>\n<p>This is how we often conduct a CRC Session:</p>\n<ul>\n<li>Preparation:<ul>\n<li>Make sure everybody has a high-level overview of the software (bounded context / use case overview). Because design should also focus on the long term.</li>\n<li>Choose some scenarios (such as &quot;customer adds a promoted product to cart and sees the discounts...&quot;) that you want to discuss in this session</li>\n</ul>\n</li>\n<li>Collect candidates for classes:<ul>\n<li>For the first session, it makes sense to search for potential candidates for classes.</li>\n<li>Just put them on a whiteboard. Often nouns in scenarios are good candidates.</li>\n<li>Put the most promising ones on Post-its. (You can add more at any time)</li>\n</ul>\n</li>\n<li>CRC session:<ul>\n<li>1 or 2 people stand up and try to explain the scenario with the help of the classes.</li>\n<li>This is similar to explaining a sequence diagramm and the cards are put on the table from left to right. During or after this, you can discuss design decisions and alternatives with the team.</li>\n<li>After this, someone else can stand up and present a potential alternative sequence.</li>\n<li>Once the team is aligned on a version they want to implement, it makes sense that it is repeated by different persons. Being exact is very important and avoids the situation where people can have an individual understanding of the model. The model and the collaboration lives in the heads of the people in the team – therefore it is important that everyone understands it the same way.</li>\n</ul>\n</li>\n<li>Closing:<ul>\n<li>We are often not too enthusiatic about adding a list of &quot;collaborators&quot; to the cards, since the sequence explains this very well.</li>\n<li>So just take a picture and document the result somewhere, so that you can review the status for the next CRC session.</li>\n<li>Maybe some decisions are worth being documented in your <a href=\"/techradar/methods-and-patterns/adr.html\">Architecture decision records</a></li>\n</ul>\n</li>\n</ul>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\crc.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "cypress",
          "release": "2019-11-01",
          "title": "Cypress",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\cypress.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.cypress.io/\">Cypress</a> is a new front-end testing tool (end2end). It comes as a simple node package and is therefore easy to use and maintain for front-end developers and testers. Cypress has a different approach than selenium, it runs in the browser and in the same loop as the device under test.</p>\n<p>Good:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/cypress-io/cypress\">Open source</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements\">Locally installed</a></li>\n<li>Straightforward (installed via npm and all tests are written in Javascript)</li>\n<li>Good <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell\">documentation</a> and learning material</li>\n<li>Can be run in a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/guides/command-line.html#cypress-run\">headless mode</a></li>\n</ul>\n<p>Not so good:</p>\n<ul>\n<li>No cross-browser testing (only chrome and electron)</li>\n<li>Scenarios with multiple browser tabs can not be tested</li>\n<li>Relatively new test tool, though it is becoming more popular</li>\n</ul>\n<p>Example of a test :</p>\n<pre><code class=\"language-js\">describe(&#x27;My First Test&#x27;, function() {\n  it(&#x27;Visits the Kitchen Sink&#x27;, function() {\n    cy.visit(&#x27;https<span class=\"hljs-symbol\">://example</span>.cypress.io&#x27;)\n\n    cy.contains(&#x27;type&#x27;).click()\n\n    cy.url().should(&#x27;include&#x27;, &#x27;/commands/actions&#x27;)\n\n    cy.get(&#x27;.action-email&#x27;)\n      .type(&#x27;fake@email.com&#x27;)\n      .should(&#x27;have.value&#x27;, &#x27;fake@email.com&#x27;)\n  })\n})\n</code></pre>\n"
        }
      ],
      "name": "cypress",
      "title": "Cypress",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.cypress.io/\">Cypress</a> is a new front-end testing tool (end2end). It comes as a simple node package and is therefore easy to use and maintain for front-end developers and testers. Cypress has a different approach than selenium, it runs in the browser and in the same loop as the device under test.</p>\n<p>Good:</p>\n<ul>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/cypress-io/cypress\">Open source</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements\">Locally installed</a></li>\n<li>Straightforward (installed via npm and all tests are written in Javascript)</li>\n<li>Good <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell\">documentation</a> and learning material</li>\n<li>Can be run in a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.cypress.io/guides/guides/command-line.html#cypress-run\">headless mode</a></li>\n</ul>\n<p>Not so good:</p>\n<ul>\n<li>No cross-browser testing (only chrome and electron)</li>\n<li>Scenarios with multiple browser tabs can not be tested</li>\n<li>Relatively new test tool, though it is becoming more popular</li>\n</ul>\n<p>Example of a test :</p>\n<pre><code class=\"language-js\">describe(&#x27;My First Test&#x27;, function() {\n  it(&#x27;Visits the Kitchen Sink&#x27;, function() {\n    cy.visit(&#x27;https<span class=\"hljs-symbol\">://example</span>.cypress.io&#x27;)\n\n    cy.contains(&#x27;type&#x27;).click()\n\n    cy.url().should(&#x27;include&#x27;, &#x27;/commands/actions&#x27;)\n\n    cy.get(&#x27;.action-email&#x27;)\n      .type(&#x27;fake@email.com&#x27;)\n      .should(&#x27;have.value&#x27;, &#x27;fake@email.com&#x27;)\n  })\n})\n</code></pre>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\cypress.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "dagger",
          "release": "2019-11-01",
          "title": "Dagger",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\dagger.md",
          "body": ""
        },
        {
          "name": "dagger",
          "release": "2017-03-01",
          "title": "Dagger",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\dagger.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://google.github.io/dagger/\">Dagger</a> is a fully static, compile-time <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://en.wikipedia.org/wiki/Dependency_injection\">dependency injection</a> framework for both Java and Android. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://google.github.io/dagger/\">Dagger</a> doesn&#39;t use reflections at runtime, it saves resources. For us, it is a perfect match for Android development.</p>\n<p>We at AOE use it as a base framework for every Android project.</p>\n"
        }
      ],
      "name": "dagger",
      "title": "Dagger",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://google.github.io/dagger/\">Dagger</a> is a fully static, compile-time <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://en.wikipedia.org/wiki/Dependency_injection\">dependency injection</a> framework for both Java and Android. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://google.github.io/dagger/\">Dagger</a> doesn&#39;t use reflections at runtime, it saves resources. For us, it is a perfect match for Android development.</p>\n<p>We at AOE use it as a base framework for every Android project.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\dagger.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "datadog",
          "release": "2019-11-01",
          "title": "Datadog",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\datadog.md",
          "body": ""
        },
        {
          "name": "datadog",
          "release": "2017-03-01",
          "title": "Datadog",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\datadog.md",
          "body": "<p>After realizing that AWS CloudWatch isn&#39;t flexible enough, and running our own metrics aggregation, monitoring and altering isn&#39;t something we want to do ourselves, we decided to give Datadog a try. Datadog is very simple to set up and retrieves metrics from the AWS API (and many other integrations) and from an agent running on the EC2 instances. On top of that, it comes with many plugins for services such as Apache, NGINX and ElasticSearch, allowing us to track all important metrics without much effort. Creating dashboards, setting up alarms and integrating into other applications (such as ticket systems) is easy to do and works fine.</p>\n"
        }
      ],
      "name": "datadog",
      "title": "Datadog",
      "ring": "assess",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>After realizing that AWS CloudWatch isn&#39;t flexible enough, and running our own metrics aggregation, monitoring and altering isn&#39;t something we want to do ourselves, we decided to give Datadog a try. Datadog is very simple to set up and retrieves metrics from the AWS API (and many other integrations) and from an agent running on the EC2 instances. On top of that, it comes with many plugins for services such as Apache, NGINX and ElasticSearch, allowing us to track all important metrics without much effort. Creating dashboards, setting up alarms and integrating into other applications (such as ticket systems) is easy to do and works fine.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\datadog.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "ddev",
          "release": "2021-01-01",
          "title": "DDEV",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": true,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\ddev.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ddev.com/ddev-local/\">DDEV</a> is an open source tool that makes it dead simple to get local PHP development environments up and running within minutes. It&#39;s powerful and flexible as a result of its per-project environment configurations, which can be extended, version controlled, and shared. In short, DDEV aims to allow development teams to use Docker in their workflow without the complexities of bespoke configuration.</p>\n<p>At AOE, we use DDEV in a variety of PHP projects (large and small). It has made the onboarding process extremely easy for new developers and developers who have already worked with DDEV feel right at home in other projects.</p>\n<p>DDEV makes adding needed dependencies super easy and so far has met every requirement we&#39;ve ever had. This is mainly because DDEV is just a wrapper for existing tools like Docker-Compose. However, it does take away a lot of the complexity that is normally involved in configuring these tools.</p>\n"
        }
      ],
      "name": "ddev",
      "title": "DDEV",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.ddev.com/ddev-local/\">DDEV</a> is an open source tool that makes it dead simple to get local PHP development environments up and running within minutes. It&#39;s powerful and flexible as a result of its per-project environment configurations, which can be extended, version controlled, and shared. In short, DDEV aims to allow development teams to use Docker in their workflow without the complexities of bespoke configuration.</p>\n<p>At AOE, we use DDEV in a variety of PHP projects (large and small). It has made the onboarding process extremely easy for new developers and developers who have already worked with DDEV feel right at home in other projects.</p>\n<p>DDEV makes adding needed dependencies super easy and so far has met every requirement we&#39;ve ever had. This is mainly because DDEV is just a wrapper for existing tools like Docker-Compose. However, it does take away a lot of the complexity that is normally involved in configuring these tools.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\ddev.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "decoupling-infrastructure-via-messaging",
          "release": "2019-11-01",
          "title": "Decoupling Infrastructure via Messaging",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\decoupling-infrastructure-via-messaging.md",
          "body": ""
        },
        {
          "name": "decoupling-infrastructure-via-messaging",
          "release": "2017-03-01",
          "title": "Decoupling Infrastructure via Messaging",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\decoupling-infrastructure-via-messaging.md",
          "body": "<p>In <a href=\"/techradar/methods-and-patterns/microservices.html\">Microservices</a> we have already covered the trend that modern architectures are moving away more and more from big monolithic applications to distributed software suites. The result of splitting our software and infrastructure in smaller parts, is the need to communicate with each other. This can be done by direct communication or by message-based asynchronouous communication. While synchronuous communication allows for more plannable &quot;real-time&quot; response times of the overall systems, asynchronouos communication increases the resilience and stability of the system significantly and allows one to use other integration and scaling patterns. However, it often comes with additional complexity.</p>\n<p>Most of the IaaS Cloud providers offer messaging services such as AWS SQS which provide the possibility to decouple our infrastructure via Messaging. Also, we use <a href=\"/techradar/tools/rabbitmq.html\">RabbitMQ</a> as a Messaging and Broker solution within our applications. The decision of using messaging and messaging patterns as an integration strategy can be made as part of <a href=\"/techradar/methods-and-patterns/strategic-domain-driven-design.html\">strategic design</a> considerations.</p>\n"
        }
      ],
      "name": "decoupling-infrastructure-via-messaging",
      "title": "Decoupling Infrastructure via Messaging",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>In <a href=\"/techradar/methods-and-patterns/microservices.html\">Microservices</a> we have already covered the trend that modern architectures are moving away more and more from big monolithic applications to distributed software suites. The result of splitting our software and infrastructure in smaller parts, is the need to communicate with each other. This can be done by direct communication or by message-based asynchronouous communication. While synchronuous communication allows for more plannable &quot;real-time&quot; response times of the overall systems, asynchronouos communication increases the resilience and stability of the system significantly and allows one to use other integration and scaling patterns. However, it often comes with additional complexity.</p>\n<p>Most of the IaaS Cloud providers offer messaging services such as AWS SQS which provide the possibility to decouple our infrastructure via Messaging. Also, we use <a href=\"/techradar/tools/rabbitmq.html\">RabbitMQ</a> as a Messaging and Broker solution within our applications. The decision of using messaging and messaging patterns as an integration strategy can be made as part of <a href=\"/techradar/methods-and-patterns/strategic-domain-driven-design.html\">strategic design</a> considerations.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\decoupling-infrastructure-via-messaging.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "dependency-update-scan",
          "release": "2019-11-01",
          "title": "Dependency Update Scan",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\dependency-update-scan.md",
          "body": "<p>Automated dependency scans are useful to remove the manual task of regularly checking for version updates.\nOur teams are utilizing the Open Source bots <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/renovatebot/renovate\">Renovate</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/fthomas/scala-steward\">Scala Steward</a>, both of which are running as a scheduled GitLab job in our internal infrastructure.\nThe bots are regularly creating merge requests with dependency version updates against our projects.</p>\n<p>Having this automated comes with a few advantages:</p>\n<ul>\n<li>Important dependency updates are available very shortly after they have been published (e.g. for security issues)</li>\n<li>Changelogs are referenced in the merge requests, making it easy to review if the update is relevant</li>\n<li>An automatically triggered pipeline is running our test suites, giving us a high confidence that the version update is non-breaking if the pipeline was successful</li>\n<li>Regular small updates are easier to maintain than bulk updates of many libraries at once, reducing the risk of introducing compatibility breaking changes</li>\n</ul>\n<p>Automated merge requests allow us to focus on reviewing, testing and prioritization of dependency version updates with considerably less effort.</p>\n"
        }
      ],
      "name": "dependency-update-scan",
      "title": "Dependency Update Scan",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>Automated dependency scans are useful to remove the manual task of regularly checking for version updates.\nOur teams are utilizing the Open Source bots <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/renovatebot/renovate\">Renovate</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/fthomas/scala-steward\">Scala Steward</a>, both of which are running as a scheduled GitLab job in our internal infrastructure.\nThe bots are regularly creating merge requests with dependency version updates against our projects.</p>\n<p>Having this automated comes with a few advantages:</p>\n<ul>\n<li>Important dependency updates are available very shortly after they have been published (e.g. for security issues)</li>\n<li>Changelogs are referenced in the merge requests, making it easy to review if the update is relevant</li>\n<li>An automatically triggered pipeline is running our test suites, giving us a high confidence that the version update is non-breaking if the pipeline was successful</li>\n<li>Regular small updates are easier to maintain than bulk updates of many libraries at once, reducing the risk of introducing compatibility breaking changes</li>\n</ul>\n<p>Automated merge requests allow us to focus on reviewing, testing and prioritization of dependency version updates with considerably less effort.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\dependency-update-scan.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "devops-practices",
          "release": "2017-03-01",
          "title": "Devops practices",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\devops-practices.md",
          "body": "<p>DevOps is a term that has been around for some years now. We understand DevOps as a philosophy and culture with related practices and tools - all with the aim of bringing (IT) Operations closer to Development.  </p>\n<p>Jez Humble described the devops movement like this: &quot;a cross-functional community of practice dedicated to the study of building, evolving and operating rapidly changing, secure, resilient systems at scale&quot;.</p>\n<p>With the size of software projects and the effects of agile development, the need to also deliver operation and infrastructure in an agile way increases more and more.</p>\n<p>We have been using the following practices with success:</p>\n<p><strong>Crossfunctional Teams &quot;you build it, you run it&quot;</strong></p>\n<p>In the past year, we have moved from a more centralistic or standanlone IT and operations service team to crossfunctional teams with Infrastructure experts working in and with the development team (admins joining the project team).</p>\n<p>And, we changed to crossfunctional teams and a &quot;you build it, you run it&quot; approach for the bigger projects. We have seen that this leads to the following positive effects:</p>\n<ul>\n<li>Software application architecture demands a certain infrastructure and the other way around. Having all the know-how in one team leads to more major decisions and implementations. Also, solving of root causes for problems works better.</li>\n<li>Rotating operation and incident management inside the whole team brings everyone into closer contact with the day-to-day operation of their software. This results in a shared and improved responsibility and commitment to the complete platform in the team. In addition, this brings developers into contact with the customer - which is an important feedback loop as well.</li>\n<li>Increased flexibility in the infrastructure: Implementations and adjustments in the infrastructure are faster and can be done together with the ongoing agile development of the platform.</li>\n<li>Developers also explicitly think of operation issues when building the application - since they are responsible for operation. For example, logging concept, monitoring aspects and resilience patterns are now explicitly optimized continuously and improve faster.\nImportant enabler of such an approach is the size and available budget for the project (not every project allows for having a continuous crossfunctional teams that carries out ongoing development and operations). Also, this requires a certain amount of independence for the team.</li>\n</ul>\n<p>As always, we are establishing &quot;community of interests&quot; to improve and promote the knowledge transfer between different teams.</p>\n<p><strong>Increase of relevant tools</strong></p>\n<p>Another important aspect and also enabler of DevOps practices is the increase of certain tool and methods - some of them are also represented in the Tech Radar. For example: Puppet Environments; Docker; Cloud Services, Terraform, Consul etc.</p>\n<p><strong>DevSetup = Prod Setup, <a href=\"methods-and-patterns/infrastructure-as-code.html\">Infrastructure as a Code</a></strong></p>\n<p>Keeping the development infrastructure setup close to production is also a commonly implemented practice and a direct result of the &quot;Infrastructure as Code&quot; method. Handling infrastructure and the required changes and innovations in ways similar to those used for applications is important; you can ready more about this here: Infrastructure as Code</p>\n<p>We encourage all teams to adopt devops practices in the teams and to take care that there is a true collaboration between the different experts in a team and no invisible wall.</p>\n"
        }
      ],
      "name": "devops-practices",
      "title": "Devops practices",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>DevOps is a term that has been around for some years now. We understand DevOps as a philosophy and culture with related practices and tools - all with the aim of bringing (IT) Operations closer to Development.  </p>\n<p>Jez Humble described the devops movement like this: &quot;a cross-functional community of practice dedicated to the study of building, evolving and operating rapidly changing, secure, resilient systems at scale&quot;.</p>\n<p>With the size of software projects and the effects of agile development, the need to also deliver operation and infrastructure in an agile way increases more and more.</p>\n<p>We have been using the following practices with success:</p>\n<p><strong>Crossfunctional Teams &quot;you build it, you run it&quot;</strong></p>\n<p>In the past year, we have moved from a more centralistic or standanlone IT and operations service team to crossfunctional teams with Infrastructure experts working in and with the development team (admins joining the project team).</p>\n<p>And, we changed to crossfunctional teams and a &quot;you build it, you run it&quot; approach for the bigger projects. We have seen that this leads to the following positive effects:</p>\n<ul>\n<li>Software application architecture demands a certain infrastructure and the other way around. Having all the know-how in one team leads to more major decisions and implementations. Also, solving of root causes for problems works better.</li>\n<li>Rotating operation and incident management inside the whole team brings everyone into closer contact with the day-to-day operation of their software. This results in a shared and improved responsibility and commitment to the complete platform in the team. In addition, this brings developers into contact with the customer - which is an important feedback loop as well.</li>\n<li>Increased flexibility in the infrastructure: Implementations and adjustments in the infrastructure are faster and can be done together with the ongoing agile development of the platform.</li>\n<li>Developers also explicitly think of operation issues when building the application - since they are responsible for operation. For example, logging concept, monitoring aspects and resilience patterns are now explicitly optimized continuously and improve faster.\nImportant enabler of such an approach is the size and available budget for the project (not every project allows for having a continuous crossfunctional teams that carries out ongoing development and operations). Also, this requires a certain amount of independence for the team.</li>\n</ul>\n<p>As always, we are establishing &quot;community of interests&quot; to improve and promote the knowledge transfer between different teams.</p>\n<p><strong>Increase of relevant tools</strong></p>\n<p>Another important aspect and also enabler of DevOps practices is the increase of certain tool and methods - some of them are also represented in the Tech Radar. For example: Puppet Environments; Docker; Cloud Services, Terraform, Consul etc.</p>\n<p><strong>DevSetup = Prod Setup, <a href=\"methods-and-patterns/infrastructure-as-code.html\">Infrastructure as a Code</a></strong></p>\n<p>Keeping the development infrastructure setup close to production is also a commonly implemented practice and a direct result of the &quot;Infrastructure as Code&quot; method. Handling infrastructure and the required changes and innovations in ways similar to those used for applications is important; you can ready more about this here: Infrastructure as Code</p>\n<p>We encourage all teams to adopt devops practices in the teams and to take care that there is a true collaboration between the different experts in a team and no invisible wall.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\devops-practices.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "diagrams-as-code",
          "release": "2021-01-01",
          "title": "Diagrams as Code",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\diagrams-as-code.md",
          "body": "<p>Documenting concepts and software architecture as diagrams using code offers great benefit over heavier solutions.\nHaving documentation and diagrams treated as code and checked-in into version control increases transparency, collaboration as well as productivity.\nThe textual representation of diagrams is easy to write and read. Generation of graphical representations as SVG or PNG images is also easy with the associated tools.</p>\n<p>We make heavy use of <a href=\"/techradar/tools/plant-uml.html\">PlantUML</a> combined with <a href=\"/techradar/tools/asciidoc.html\">Asciidoc</a> and tools \nlike <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://asciidoctor.org/docs/asciidoctor-diagram/\">AsciiDoctor Diagram</a> to include and inline PlantUML diagrams into documentations.\nThe latter allows a variety of other diagram formats which can be easily mixed and matched.</p>\n"
        }
      ],
      "name": "diagrams-as-code",
      "title": "Diagrams as Code",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Documenting concepts and software architecture as diagrams using code offers great benefit over heavier solutions.\nHaving documentation and diagrams treated as code and checked-in into version control increases transparency, collaboration as well as productivity.\nThe textual representation of diagrams is easy to write and read. Generation of graphical representations as SVG or PNG images is also easy with the associated tools.</p>\n<p>We make heavy use of <a href=\"/techradar/tools/plant-uml.html\">PlantUML</a> combined with <a href=\"/techradar/tools/asciidoc.html\">Asciidoc</a> and tools \nlike <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://asciidoctor.org/docs/asciidoctor-diagram/\">AsciiDoctor Diagram</a> to include and inline PlantUML diagrams into documentations.\nThe latter allows a variety of other diagram formats which can be easily mixed and matched.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\diagrams-as-code.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "distributed-tracing",
          "release": "2019-11-01",
          "title": "Distributed Tracing",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\distributed-tracing.md",
          "body": "<p>Distributed Tracing creates visibility over processes spanning multiple applications.\nIn a microservice world where a request or operation involves multiple applications it is helpful to have an overview of what system is involved, at what point.\nAlso visibility of communicated data and errors helps to quickly identify issues in a microservice environment.\nOur tool of choice is <a href=\"/techradar/platforms-and-aoe-services/jaeger.html\">Jaeger</a> with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/openzipkin/b3-propagation\">B3 Propagation</a>.</p>\n"
        }
      ],
      "name": "distributed-tracing",
      "title": "Distributed Tracing",
      "ring": "trial",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Distributed Tracing creates visibility over processes spanning multiple applications.\nIn a microservice world where a request or operation involves multiple applications it is helpful to have an overview of what system is involved, at what point.\nAlso visibility of communicated data and errors helps to quickly identify issues in a microservice environment.\nOur tool of choice is <a href=\"/techradar/platforms-and-aoe-services/jaeger.html\">Jaeger</a> with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/openzipkin/b3-propagation\">B3 Propagation</a>.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\distributed-tracing.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "docker",
          "release": "2018-03-01",
          "title": "Docker",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\docker.md",
          "body": "<p>Docker has pulled off very quickly and we updated it to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "docker",
          "release": "2017-03-01",
          "title": "Docker",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\docker.md",
          "body": "<p>Docker is currently the most-used solution for creating and managing container-based infrastructures and deployments.</p>\n<p>Essentially, Docker is a platform to build container images, distribute them and run them as an isolated process (using Linux kernel cgroups, network namespaces and custom mounts).</p>\n<p>In a DevOps environment, this helps a lot as we can run the exact same software and runtime (such as PHP) on both production and locally while developing. This enables us to debug our software much easier.</p>\n<p>Also, Docker allows us to keep our development setup much smaller and faster; instead of VirtualBox setups on a per-project base, we can compose our project development setup out of small containers. A CI environment building the containers allows us to package and test the whole environment instead of different software components on different runtimes in a much more stable way.</p>\n<p>Backed by services such as <a href=\"/techradar/platforms-and-aoe-services/kubernetes.html\">Kubernetes</a>, we can deploy Docker containers on a flexible infrastructure and enable our developers to test their software more easily in different environments.</p>\n<p>Here at AOE, we assess Docker in different projects to become more flexible and faster, which increases our focus on development of even better and more stable software.</p>\n"
        }
      ],
      "name": "docker",
      "title": "Docker",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Docker has pulled off very quickly and we updated it to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\docker.md"
    },
    {
      "flag":FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "drupal",
          "release": "2021-01-01",
          "title": "Drupal",
          "ring": "trial",
          "quadrant": "tools",
          "featured": true,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\drupal.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.drupal.org/\">Drupal</a> is an open source content management system and framework based on a PHP stack.\nIt has a huge community, so it&#39;s no wonder it&#39;s among the top 10 CMS worldwide in terms of market share.</p>\n<p>At AOE we consume Drupal mainly headless via JSON API. We appreciate its large feature set and mature plugin system as well as the general ecosystem.</p>\n<p>In addition, the extensive documentation and setup with <a href=\"/techradar/tools/ddev.html\">DDEV</a> make it easy to get started.</p>\n"
        }
      ],
      "name": "drupal",
      "title": "Drupal",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.drupal.org/\">Drupal</a> is an open source content management system and framework based on a PHP stack.\nIt has a huge community, so it&#39;s no wonder it&#39;s among the top 10 CMS worldwide in terms of market share.</p>\n<p>At AOE we consume Drupal mainly headless via JSON API. We appreciate its large feature set and mature plugin system as well as the general ecosystem.</p>\n<p>In addition, the extensive documentation and setup with <a href=\"/techradar/tools/ddev.html\">DDEV</a> make it easy to get started.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\drupal.md"
    },
    {
      "flag": FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "eks",
          "release": "2021-01-01",
          "title": "Amazon EKS",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\eks.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/eks/\">Amazon Elastic Kubernetes Service</a> (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane or workloads.\nAmazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. \nIt also provides automated version upgrades and patching for them.</p>\n<p>Amazon EKS is fully supported by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/platforms-and-aoe-services/terraform.html\">Terraform</a> which brings the advantage that its configuration is written in code,\nwhich fulfils the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/platforms-and-aoe-services/infrastructure-as-code.html\">infrastructure as code</a> philosophy. Amazon has also implemented important (security) features to their service to ensure that Amazon EKS is well integrated into the broader AWS landscape. Kubernetes version upgrades and security patches are provided in a reliable schedule and with proper documentation. Alongside with the managed service, Amazons also provides it&#39;s own <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/blogs/opensource/introducing-amazon-eks-distro/\">EKS distribution</a> which closes the gap for on-premise installations.</p>\n<p>Different Amazon EKS Clusters are in use on a variety of environments like development, integration, testing and production.\nWe experienced that Kubernetes version updates are done without major efforts or impact to the running cluster. Along with that, using EKS avoids a lot of low-level optimization and component management which were required in manually configured clusters in the past.</p>\n"
        },
        {
          "name": "eks",
          "release": "2019-11-01",
          "title": "Amazon EKS",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\eks.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/eks/\">Amazon Elastic Kubernetes Service</a> (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. \nAmazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. \nIt also provides automated version upgrades and patching for them.</p>\n<p>Amazon EKS is used as part of the infrastructure in the Congstar project. \nDifferent Amazon EKS Clusters are in use on a variety of environments like development, integration, testing and production.\nWe experienced that Kubernetes version updates are done without major efforts or impact to the running cluster.</p>\n<p>Amazon EKS is fully supported by Terraform which brings the advantage that its configuration is written in code,\nwhich fulfils the infrastructure as code philosophy.</p>\n"
        }
      ],
      "name": "eks",
      "title": "Amazon EKS",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/eks/\">Amazon Elastic Kubernetes Service</a> (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane or workloads.\nAmazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. \nIt also provides automated version upgrades and patching for them.</p>\n<p>Amazon EKS is fully supported by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/platforms-and-aoe-services/terraform.html\">Terraform</a> which brings the advantage that its configuration is written in code,\nwhich fulfils the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/platforms-and-aoe-services/infrastructure-as-code.html\">infrastructure as code</a> philosophy. Amazon has also implemented important (security) features to their service to ensure that Amazon EKS is well integrated into the broader AWS landscape. Kubernetes version upgrades and security patches are provided in a reliable schedule and with proper documentation. Alongside with the managed service, Amazons also provides it&#39;s own <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/blogs/opensource/introducing-amazon-eks-distro/\">EKS distribution</a> which closes the gap for on-premise installations.</p>\n<p>Different Amazon EKS Clusters are in use on a variety of environments like development, integration, testing and production.\nWe experienced that Kubernetes version updates are done without major efforts or impact to the running cluster. Along with that, using EKS avoids a lot of low-level optimization and component management which were required in manually configured clusters in the past.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\eks.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "elasticsearch",
          "release": "2018-03-01",
          "title": "Elasticsearch",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\elasticsearch.md",
          "body": "<p>We are continuing to use Elasticsearch successfully in [Searchperience®] and have benefited from the aggregation features for related use cases such as rendering category trees.\nWe are also using Elasticsearch for some microservices as our persistence solution.</p>\n<p>This is why we have updated its status to <strong>adopt</strong>.</p>\n"
        },
        {
          "name": "elasticsearch",
          "release": "2017-03-01",
          "title": "Elasticsearch",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\elasticsearch.md",
          "body": "<p>Elasticsearch is a REST-based search and analytics engine based on Lucene. Unlike its competitor Apache Solr, it was developed in the beginning with clustering and scaling in mind. It allows you to create complex queries while still delivering results very fast.</p>\n<p>At AOE, we use Elasticsearch for logging as well as our own search solution <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.searchperience.com/\">Searchperience®</a>. We recently moved the Searchperience stack from Solr to Elasticsearch and think this was the right decision. Especially in terms of scaling, ease of use and performance, Elasticsearch really shines. Also, the API design took some of the learnings from Apache SOLR into account - for example, the queryDSL is a powerful way of describing different search use cases with highly flexible support of aggregations, etc.</p>\n"
        }
      ],
      "name": "elasticsearch",
      "title": "Elasticsearch",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>We are continuing to use Elasticsearch successfully in [Searchperience®] and have benefited from the aggregation features for related use cases such as rendering category trees.\nWe are also using Elasticsearch for some microservices as our persistence solution.</p>\n<p>This is why we have updated its status to <strong>adopt</strong>.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\elasticsearch.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "elk-stack",
          "release": "2017-03-01",
          "title": "ELK Stack",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\elk-stack.md",
          "body": "<p>The company behind Elasticsearch offers a very nice solution for logging and analysis of distributed data such as logfiles.</p>\n<p>In today&#39;s increasingly distributed IT systems, it&#39;s very helpful to have a central view of what is going on in your systems - and of course nobody can and wants to look in different logfiles on different servers. A central logging solution provides the option to detect potential relationships between different events more easily. Also, also it can be used to extract useful KPIs or to visualize information on dashboards.</p>\n<p>The abbreviation &quot;<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.elastic.co/products\">ELK</a> Stack&quot; stands for the Tools <u>E</u>lasticsearch, <u>L</u>ogstash and <u>K</u>ibana: Together, they provide a solution for collecting data the ability to search, visualize and analyze data in real time.</p>\n<p>Logstash is used to process and forward different data (or logfile) formats. <u>E</u>lasticsearch is used as a search index and together with the Kibana plugin you can configure highly individual dashboards. Recently, there are also the Beats Tools joining this toolstack to ship data to Elasticsearch.</p>\n<p>We have been using the ELK Stack for several years now in several projects and different infrastructure setups - we use it to visualize traffic, certain KPIs  or just to analyze and search in application logs. We encourage all teams to use such a solution and take care to write useful logs in your applications.</p>\n"
        }
      ],
      "name": "elk-stack",
      "title": "ELK Stack",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>The company behind Elasticsearch offers a very nice solution for logging and analysis of distributed data such as logfiles.</p>\n<p>In today&#39;s increasingly distributed IT systems, it&#39;s very helpful to have a central view of what is going on in your systems - and of course nobody can and wants to look in different logfiles on different servers. A central logging solution provides the option to detect potential relationships between different events more easily. Also, also it can be used to extract useful KPIs or to visualize information on dashboards.</p>\n<p>The abbreviation &quot;<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.elastic.co/products\">ELK</a> Stack&quot; stands for the Tools <u>E</u>lasticsearch, <u>L</u>ogstash and <u>K</u>ibana: Together, they provide a solution for collecting data the ability to search, visualize and analyze data in real time.</p>\n<p>Logstash is used to process and forward different data (or logfile) formats. <u>E</u>lasticsearch is used as a search index and together with the Kibana plugin you can configure highly individual dashboards. Recently, there are also the Beats Tools joining this toolstack to ship data to Elasticsearch.</p>\n<p>We have been using the ELK Stack for several years now in several projects and different infrastructure setups - we use it to visualize traffic, certain KPIs  or just to analyze and search in application logs. We encourage all teams to use such a solution and take care to write useful logs in your applications.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\elk-stack.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "event-storming",
          "release": "2019-11-01",
          "title": "Event Storming",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\event-storming.md",
          "body": "<p>Event Storming is a method of modeling business processes using domain events.</p>\n<p>With complex business processes, people usually know their part of the process very well.\nHaving people from different departments in one room, allows (and requires!) a conversation.\nKnowledge silos get opened up. All learnings can be directly visualized.</p>\n<p>We tried this method a couple of times with different sized scopes. We believe it can be of value and has potential.</p>\n<h2 id=\"method-overview\">Method Overview</h2>\n<p>It&#39;s like brainstorming - with the goal to visualize a business line or process.</p>\n<p>Event Storming is done in a workshop format.</p>\n<p>To get a business process modeled quickly and complete, it&#39;s important to get domain experts, developers, UX and\neverybody else who is involved to some extend in the related business line into one room.\nWith virtually unlimited space for modeling using big paper rolls put onto the walls, equipped with colored stickies\nand markers, the modeling workshop can start.</p>\n<p>During the workshop, the goal is to model the big picture, without limiting or focusing just on parts of a process.</p>\n"
        }
      ],
      "name": "event-storming",
      "title": "Event Storming",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>Event Storming is a method of modeling business processes using domain events.</p>\n<p>With complex business processes, people usually know their part of the process very well.\nHaving people from different departments in one room, allows (and requires!) a conversation.\nKnowledge silos get opened up. All learnings can be directly visualized.</p>\n<p>We tried this method a couple of times with different sized scopes. We believe it can be of value and has potential.</p>\n<h2 id=\"method-overview\">Method Overview</h2>\n<p>It&#39;s like brainstorming - with the goal to visualize a business line or process.</p>\n<p>Event Storming is done in a workshop format.</p>\n<p>To get a business process modeled quickly and complete, it&#39;s important to get domain experts, developers, UX and\neverybody else who is involved to some extend in the related business line into one room.\nWith virtually unlimited space for modeling using big paper rolls put onto the walls, equipped with colored stickies\nand markers, the modeling workshop can start.</p>\n<p>During the workshop, the goal is to model the big picture, without limiting or focusing just on parts of a process.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\event-storming.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "evil-user-stories",
          "release": "2017-03-01",
          "title": "Evil User Stories",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\evil-user-stories.md",
          "body": "<p>With Evil User Stories, we aim to raise the project teams&#39; (PO, Dev-Team, QA) and clients&#39; awareness for security topics and introduce a security-by-design principle.</p>\n<p>The first step is to identify business use cases of potential vulnerabilities in our software product. The next step is to write an Evil User Story for this use case, from the perspective of an evil persona, e.g. &quot;John Badboy who wants to hack our software&quot;. The idea behind this is to take a look at specific parts (business logic) of the software from a perspective that would otherwise not be considered when working on standard user stories.</p>\n<p>So how would this work? To illustrate this, let&#39;s consider the following user story: &quot;As Emma Shopping I am be able to pay for a product in my checkout using a credit card&quot;. To get that story done, we might have to persist some payment data somewhere. But within the context of an Evil user story we now also need to consider the security for the credit card and payment handling in our application. So, for that reason, we write an Evil User Story, which in this case could, for example, be &quot;As John Badboy, I want to steal payment data&quot; or more specifically &quot;As John Badboy, I want to do to sql inject to get the payment token&quot;.</p>\n<p>Before implementation of this particular user story starts, developers should think about how they can secure potentially vulnerable parts of the software to prevent attacks such as sql injections. In this case, one approach should be the use of prepared statements for sql queries. When the development is finished, we should then be able to test the story using an automated testing approach with a penetration testing tool such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sqlmap.org/\">sqlmap</a> to confirm that our database queries are not vulnerable to sql injections.</p>\n<p>Additionally, both solutions should be checked during the development process using code reviews to identify and correct potentially buggy code.</p>\n"
        }
      ],
      "name": "evil-user-stories",
      "title": "Evil User Stories",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>With Evil User Stories, we aim to raise the project teams&#39; (PO, Dev-Team, QA) and clients&#39; awareness for security topics and introduce a security-by-design principle.</p>\n<p>The first step is to identify business use cases of potential vulnerabilities in our software product. The next step is to write an Evil User Story for this use case, from the perspective of an evil persona, e.g. &quot;John Badboy who wants to hack our software&quot;. The idea behind this is to take a look at specific parts (business logic) of the software from a perspective that would otherwise not be considered when working on standard user stories.</p>\n<p>So how would this work? To illustrate this, let&#39;s consider the following user story: &quot;As Emma Shopping I am be able to pay for a product in my checkout using a credit card&quot;. To get that story done, we might have to persist some payment data somewhere. But within the context of an Evil user story we now also need to consider the security for the credit card and payment handling in our application. So, for that reason, we write an Evil User Story, which in this case could, for example, be &quot;As John Badboy, I want to steal payment data&quot; or more specifically &quot;As John Badboy, I want to do to sql inject to get the payment token&quot;.</p>\n<p>Before implementation of this particular user story starts, developers should think about how they can secure potentially vulnerable parts of the software to prevent attacks such as sql injections. In this case, one approach should be the use of prepared statements for sql queries. When the development is finished, we should then be able to test the story using an automated testing approach with a penetration testing tool such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sqlmap.org/\">sqlmap</a> to confirm that our database queries are not vulnerable to sql injections.</p>\n<p>Additionally, both solutions should be checked during the development process using code reviews to identify and correct potentially buggy code.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\evil-user-stories.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "explicit-test-strategy",
          "release": "2019-11-01",
          "title": "Explicit test strategy",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\explicit-test-strategy.md",
          "body": ""
        },
        {
          "name": "explicit-test-strategy",
          "release": "2017-03-01",
          "title": "Explicit test strategy",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\explicit-test-strategy.md",
          "body": "<p>According to the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://glossar.german-testing-board.info/#teststrategie\">ISTQB Glossar</a>- a <strong>Test Strategy</strong> is an abstract specification that comprises the designated test levels (unit, integration, system and acceptance tests) and the implementation of each level for a whole organization or for an application. This test strategy can be applicable to one or more projects.</p>\n<p>At AOE, we established an explicit test strategy for many of our projects. The coordination of the test levels improves the effectivity of test runs and helps to avoid testing gaps, double inspection and overhead. Every test level has a different focus. Tests that are executed on one level don&#39;t have to be implemented on others.</p>\n<p>These are the test levels that we implement as a standard in the software deployment pipeline of our projects and that handle multiple integrated components and services:</p>\n<ul>\n<li>  <strong>Unit Test:</strong> The unit level tests verify the functionality of a specific section of code, usually at the function level. We use static as well as dynamic test methods such as code reviews, style or complexity checks and white-box testing. </li>\n<li>  <strong>Module Tests:</strong> Module Tests focus on testing the functionality that a service or component provides in isolation to other components or services that this service depends on. This test stage finds errors in a component. It should never fail due to a consumed service that is not reachable or has been altered. Therefore, all dependencies of these components are mocked or stubbed on some level. Tests are most commonly conducted through interfaces using black-box testing.</li>\n<li>  <strong>Integration Tests:</strong> On the integration level, individual software modules are combined and tested as a group. The integration testing verifies functional, performance and reliability requirements. These tests are also most commonly conducted through interfaces using black-box testing. In case there is a great number of (external) subsystems, we mock these systems outside of the defined context and use contract-based testing to verify the interfaces. All contract-based tests that focus on testing the interface contracts between services are also executed on this test level.</li>\n<li>  <strong>System Level Tests:</strong> On the system level, tests are performed on a complete, integrated system, where they evaluate the system&#39;s compliance with its specified requirements. System tests not only verify the design, but they also check the system&#39;s behavior in general and even the assumed expectations of the customer. They are intended to test up to and beyond the bounds defined by the explicit system requirements.</li>\n<li>  <strong>Client Acceptance Tests:</strong> The client acceptance level includes all testing done by the customer and is the last one in the succession of the five test levels. The objective is to evaluate the system&#39;s compliance with the business requirements and to assess whether it is acceptable for delivery.</li>\n</ul>\n<p>As a rule, we automate the execution of tests where it is feasible and sensible. Related to the test strategy are the test concept, test data management and the usage of a test case management tool that allows one to assess and categorize functional test cases.</p>\n<p>Due to the practical usefulness of having a sound test strategy for a project, we classify the explicit test strategy for projects with assess.</p>\n"
        }
      ],
      "name": "explicit-test-strategy",
      "title": "Explicit test strategy",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>According to the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://glossar.german-testing-board.info/#teststrategie\">ISTQB Glossar</a>- a <strong>Test Strategy</strong> is an abstract specification that comprises the designated test levels (unit, integration, system and acceptance tests) and the implementation of each level for a whole organization or for an application. This test strategy can be applicable to one or more projects.</p>\n<p>At AOE, we established an explicit test strategy for many of our projects. The coordination of the test levels improves the effectivity of test runs and helps to avoid testing gaps, double inspection and overhead. Every test level has a different focus. Tests that are executed on one level don&#39;t have to be implemented on others.</p>\n<p>These are the test levels that we implement as a standard in the software deployment pipeline of our projects and that handle multiple integrated components and services:</p>\n<ul>\n<li>  <strong>Unit Test:</strong> The unit level tests verify the functionality of a specific section of code, usually at the function level. We use static as well as dynamic test methods such as code reviews, style or complexity checks and white-box testing. </li>\n<li>  <strong>Module Tests:</strong> Module Tests focus on testing the functionality that a service or component provides in isolation to other components or services that this service depends on. This test stage finds errors in a component. It should never fail due to a consumed service that is not reachable or has been altered. Therefore, all dependencies of these components are mocked or stubbed on some level. Tests are most commonly conducted through interfaces using black-box testing.</li>\n<li>  <strong>Integration Tests:</strong> On the integration level, individual software modules are combined and tested as a group. The integration testing verifies functional, performance and reliability requirements. These tests are also most commonly conducted through interfaces using black-box testing. In case there is a great number of (external) subsystems, we mock these systems outside of the defined context and use contract-based testing to verify the interfaces. All contract-based tests that focus on testing the interface contracts between services are also executed on this test level.</li>\n<li>  <strong>System Level Tests:</strong> On the system level, tests are performed on a complete, integrated system, where they evaluate the system&#39;s compliance with its specified requirements. System tests not only verify the design, but they also check the system&#39;s behavior in general and even the assumed expectations of the customer. They are intended to test up to and beyond the bounds defined by the explicit system requirements.</li>\n<li>  <strong>Client Acceptance Tests:</strong> The client acceptance level includes all testing done by the customer and is the last one in the succession of the five test levels. The objective is to evaluate the system&#39;s compliance with the business requirements and to assess whether it is acceptable for delivery.</li>\n</ul>\n<p>As a rule, we automate the execution of tests where it is feasible and sensible. Related to the test strategy are the test concept, test data management and the usage of a test case management tool that allows one to assess and categorize functional test cases.</p>\n<p>Due to the practical usefulness of having a sound test strategy for a project, we classify the explicit test strategy for projects with assess.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\explicit-test-strategy.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "falco",
          "release": "2019-11-01",
          "title": "Falco",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\falco.md",
          "body": "<p>Falco is an open source project for intrusion and abnormality detection for Cloud Native platforms such as Kubernetes. \nIt detects abnormal application behavior and sends alerts via Slack, Fluentd, NATS, and more.</p>\n<p>We are assessing Falco to add another angle to host based intrusion detection and alerting.</p>\n"
        }
      ],
      "name": "falco",
      "title": "Falco",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>Falco is an open source project for intrusion and abnormality detection for Cloud Native platforms such as Kubernetes. \nIt detects abnormal application behavior and sends alerts via Slack, Fluentd, NATS, and more.</p>\n<p>We are assessing Falco to add another angle to host based intrusion detection and alerting.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\falco.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "flamingo",
          "release": "2019-11-01",
          "title": "Flamingo",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flamingo.md",
          "body": "<p>Flamingo is a high productivity go based framework for rapidly building fast and pluggable web projects.\nIt is used to build scalable and maintainable (web)applications.</p>\n<p>Flamingo is:</p>\n<ul>\n<li>open source</li>\n<li>written in go</li>\n<li>easy to learn</li>\n<li>fast and flexible</li>\n</ul>\n<p>Go as simple, powerful and typesafe language is great to implement and scale serverside logic.\nFlamingo has a clean architecture with clear dependencies in mind and offers a typical features and support for nowadays web applications:</p>\n<ul>\n<li>Powerful Templating Engines. E.g. support for Pug templates with reusable mixins and lightweight scripting.</li>\n<li>Configuration concepts using yml and support for multiple areas and contexts</li>\n<li>Powerful Dependency Injection</li>\n<li>A Module concept for building modular and pluggable applications</li>\n<li>Authentication concepts and security middleware</li>\n<li>Flexible routing with support for prefix routes and reverse routing</li>\n<li>Web Controller Support with: Request / Response / Form Handling etc</li>\n<li>Operational Readyness: Logging, (distributed) Tracing, Metrics and Healthchecks with seperate endpoint</li>\n<li>Localisation</li>\n<li>Commands</li>\n<li>Sessionhandling and Management</li>\n<li>GraphQL support and therefore support to build nice SPA and PWAs on top of it</li>\n<li>Resilience and Caching for external APIs calls.</li>\n</ul>\n<p>Flamingo itself does not contain ORM Mapper or libraries - instead it emphasizes <a href=\"/techradar/methods-and-patterns/ports-and-adapters.html\">&quot;ports and adapters&quot;</a>  architecture - so that you have a technology free (domain) model and any possible (and replaceable) persitence behind it.\nThat makes Flamingo useful to build microservices and applications - especially to build &quot;frontends&quot; or portals that require interaction with other (micro) services in a distributed architecture. \nWhen sticking to the architectural recommendation you can build modular applications with replaceable adapters that gives you independed testability.</p>\n<p>With <strong>&quot;Flamingo Commerce&quot;</strong> there is an additional active projects that offer rich and flexible features to build modern e-commerce applications.</p>\n"
        }
      ],
      "name": "flamingo",
      "title": "Flamingo",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Flamingo is a high productivity go based framework for rapidly building fast and pluggable web projects.\nIt is used to build scalable and maintainable (web)applications.</p>\n<p>Flamingo is:</p>\n<ul>\n<li>open source</li>\n<li>written in go</li>\n<li>easy to learn</li>\n<li>fast and flexible</li>\n</ul>\n<p>Go as simple, powerful and typesafe language is great to implement and scale serverside logic.\nFlamingo has a clean architecture with clear dependencies in mind and offers a typical features and support for nowadays web applications:</p>\n<ul>\n<li>Powerful Templating Engines. E.g. support for Pug templates with reusable mixins and lightweight scripting.</li>\n<li>Configuration concepts using yml and support for multiple areas and contexts</li>\n<li>Powerful Dependency Injection</li>\n<li>A Module concept for building modular and pluggable applications</li>\n<li>Authentication concepts and security middleware</li>\n<li>Flexible routing with support for prefix routes and reverse routing</li>\n<li>Web Controller Support with: Request / Response / Form Handling etc</li>\n<li>Operational Readyness: Logging, (distributed) Tracing, Metrics and Healthchecks with seperate endpoint</li>\n<li>Localisation</li>\n<li>Commands</li>\n<li>Sessionhandling and Management</li>\n<li>GraphQL support and therefore support to build nice SPA and PWAs on top of it</li>\n<li>Resilience and Caching for external APIs calls.</li>\n</ul>\n<p>Flamingo itself does not contain ORM Mapper or libraries - instead it emphasizes <a href=\"/techradar/methods-and-patterns/ports-and-adapters.html\">&quot;ports and adapters&quot;</a>  architecture - so that you have a technology free (domain) model and any possible (and replaceable) persitence behind it.\nThat makes Flamingo useful to build microservices and applications - especially to build &quot;frontends&quot; or portals that require interaction with other (micro) services in a distributed architecture. \nWhen sticking to the architectural recommendation you can build modular applications with replaceable adapters that gives you independed testability.</p>\n<p>With <strong>&quot;Flamingo Commerce&quot;</strong> there is an additional active projects that offer rich and flexible features to build modern e-commerce applications.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flamingo.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "flow",
          "release": "2018-03-01",
          "title": "Flow",
          "ring": "hold",
          "quadrant": "languages-and-frameworks",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\flow.md",
          "body": ""
        },
        {
          "name": "flow",
          "release": "2017-03-01",
          "title": "Flow",
          "ring": "hold",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\flow.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://flow.neos.io/\">Flow</a> is a PHP web application framework developed for the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.neos.io/\">Neos</a> project.</p>\n<p>We used Flow in a couple of projects and decided to put it on hold for the following reasons:</p>\n<ul>\n<li>  slow during development and hard to debug because of its need to &quot;compile&quot; the application to integrate e.g. AOP</li>\n<li>  limited documentation and community</li>\n<li>  development of the framework is closely coupled to the progress of the Neos project</li>\n</ul>\n<p>Although it could be that some of the above-mentioned aspects have improved in the past, we decided to use other PHP frameworks such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/\">Symfony</a> or other Languages (See <a href=\"/techradar/languages-and-frameworks/go-lang.html\">Go</a>; <a href=\"/techradar/languages-and-frameworks/play-framework.html\">Play Framework</a>; <a href=\"/techradar/languages-and-frameworks/spring-boot.html\">Spring Boot</a>)</p>\n"
        }
      ],
      "name": "flow",
      "title": "Flow",
      "ring": "hold",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://flow.neos.io/\">Flow</a> is a PHP web application framework developed for the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.neos.io/\">Neos</a> project.</p>\n<p>We used Flow in a couple of projects and decided to put it on hold for the following reasons:</p>\n<ul>\n<li>  slow during development and hard to debug because of its need to &quot;compile&quot; the application to integrate e.g. AOP</li>\n<li>  limited documentation and community</li>\n<li>  development of the framework is closely coupled to the progress of the Neos project</li>\n</ul>\n<p>Although it could be that some of the above-mentioned aspects have improved in the past, we decided to use other PHP frameworks such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/\">Symfony</a> or other Languages (See <a href=\"/techradar/languages-and-frameworks/go-lang.html\">Go</a>; <a href=\"/techradar/languages-and-frameworks/play-framework.html\">Play Framework</a>; <a href=\"/techradar/languages-and-frameworks/spring-boot.html\">Spring Boot</a>)</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\flow.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "flowtype",
          "release": "2019-11-01",
          "title": "Flow",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flowtype.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://flow.org/\">Flow</a> is a static type checker for JavaScript code. It&#39;s goal is to make code faster, smarter, \nmore confidently, and to a bigger scale.</p>\n"
        }
      ],
      "name": "flowtype",
      "title": "Flow",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://flow.org/\">Flow</a> is a static type checker for JavaScript code. It&#39;s goal is to make code faster, smarter, \nmore confidently, and to a bigger scale.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flowtype.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "flux",
          "release": "2019-11-01",
          "title": "Flux",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flux.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://facebook.github.io/flux/\">Flux</a> is an application architecture for building client-side web applications,\nwhich is based on React&#39;s composable view components.</p>\n"
        }
      ],
      "name": "flux",
      "title": "Flux",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://facebook.github.io/flux/\">Flux</a> is an application architecture for building client-side web applications,\nwhich is based on React&#39;s composable view components.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\flux.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "galen",
          "release": "2019-11-01",
          "title": "Galen",
          "ring": "assess",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\galen.md",
          "body": ""
        },
        {
          "name": "galen",
          "release": "2017-03-01",
          "title": "Galen",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\galen.md",
          "body": "<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://galenframework.com/\">Galen Framework</a>, layout testing can be automated to save you a lot of manual work. With its own specification language (Galen Spec), you can write tests to verify the correct look of the web page as well as the location and alignment of specific elements on a page.</p>\n<p>So, you can write simple tests such as &quot;The button should be green&quot; as well as more complex behavior specifications such as &quot;On mobile devices the button should be inside the viewport&quot;. Especially when testing a responsive website on multiple devices, browsers and resolutions, the manual testing effort gets expensive. To help with that, Galen runs its specifications fully automated with Selenium against the required browsers and devices.</p>\n<p>Whenever a test fails Galen writes a test report with screenshots to show the mismatching areas on the page to help testers and developers become aware of the problem.</p>\n<p>At AOE, the Galen Framework helps us to continuously test the UI for potential regression bugs introduced by new features.</p>\n"
        }
      ],
      "name": "galen",
      "title": "Galen",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://galenframework.com/\">Galen Framework</a>, layout testing can be automated to save you a lot of manual work. With its own specification language (Galen Spec), you can write tests to verify the correct look of the web page as well as the location and alignment of specific elements on a page.</p>\n<p>So, you can write simple tests such as &quot;The button should be green&quot; as well as more complex behavior specifications such as &quot;On mobile devices the button should be inside the viewport&quot;. Especially when testing a responsive website on multiple devices, browsers and resolutions, the manual testing effort gets expensive. To help with that, Galen runs its specifications fully automated with Selenium against the required browsers and devices.</p>\n<p>Whenever a test fails Galen writes a test report with screenshots to show the mismatching areas on the page to help testers and developers become aware of the problem.</p>\n<p>At AOE, the Galen Framework helps us to continuously test the UI for potential regression bugs introduced by new features.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\galen.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "gatlin",
          "release": "2018-03-01",
          "title": "Gatling",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gatlin.md",
          "body": "<p>Gatling is now the de-facto tool of choice for load testing in all of our\nprojects, having superseded JMeter completely. We therefore moved it to the\n<strong>Adopt</strong> level. </p>\n"
        },
        {
          "name": "gatlin",
          "release": "2017-03-01",
          "title": "Gatling",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\gatlin.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://gatling.io/\">Gatling</a> is a highly capable load testing tool. It is designed for ease of use, maintainability and high performance.</p>\n<p>Out of the box, Gatling comes with excellent support of the HTTP protocol that makes it a tool of choice for load testing any HTTP server. As the core engine is actually protocol agnostic, it is perfectly possible to implement support for other protocols. For example, Gatling currently also ships <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://gatling.io/docs/current/\">JMS support</a>.</p>\n<p>Gatling is built with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://extranet.aoe.com/confluence/display/knowledge/Scala+Lang\">Scala Lang</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://extranet.aoe.com/confluence/display/knowledge/Akka\">Akka</a>. By making good use of Scala&#39;s native language features (such as as the extensive type system), it makes writing tests feel natural and expressive, instead of writing load tests based on a DSL encoded in some special syntax.</p>\n<p>This allows us to use all native Scala features to work with, with the focus on the ability to structure your tests as pure code, and actually unit test your load tests.</p>\n<p>Besides the very good performance, we definitely like the pure code-based approach. Gatling creates HTML-based reports with nice graphs and metrics about how and what was tested.</p>\n<p>We use Gatling as an alternative to Jmeter with success in some of our projects. We encourage teams to try Gatling for future load testing. There is an integrated test recorder similiar to what other test frameworks have to get you started with a basic test case.</p>\n"
        }
      ],
      "name": "gatlin",
      "title": "Gatling",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Gatling is now the de-facto tool of choice for load testing in all of our\nprojects, having superseded JMeter completely. We therefore moved it to the\n<strong>Adopt</strong> level. </p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gatlin.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "gitflow",
          "release": "2019-11-01",
          "title": "GitFlow",
          "ring": "hold",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitflow.md",
          "body": "<p>Ever since there are recurring discussions about the version control strategy that a team should use.</p>\n<p>We have also made the experience when new teams start off with using blocking or long lived feature branches (merge late once all review comments are done) it has a negative impact on team performance.</p>\n<p>We recommend to use trunk based development with short lived (&lt;1day) feature branches, because this has shown to support continuous integration and team collaboration the best. However we do accept teams choices to use GitFlow, we just do not try to encourage them in the first place.</p>\n<p>See also:</p>\n<ul>\n<li>trunk based development <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://trunkbaseddevelopment.com/\">https://trunkbaseddevelopment.com/</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf\">https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://martinfowler.com/bliki/FeatureBranch.html\">https://martinfowler.com/bliki/FeatureBranch.html</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.continuousdeliveryconsulting.com/blog/organisation-antipattern-build-feature-branching/\">https://www.continuousdeliveryconsulting.com/blog/organisation-antipattern-build-feature-branching/</a></li>\n</ul>\n"
        }
      ],
      "name": "gitflow",
      "title": "GitFlow",
      "ring": "hold",
      "quadrant": "methods-and-patterns",
      "body": "<p>Ever since there are recurring discussions about the version control strategy that a team should use.</p>\n<p>We have also made the experience when new teams start off with using blocking or long lived feature branches (merge late once all review comments are done) it has a negative impact on team performance.</p>\n<p>We recommend to use trunk based development with short lived (&lt;1day) feature branches, because this has shown to support continuous integration and team collaboration the best. However we do accept teams choices to use GitFlow, we just do not try to encourage them in the first place.</p>\n<p>See also:</p>\n<ul>\n<li>trunk based development <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://trunkbaseddevelopment.com/\">https://trunkbaseddevelopment.com/</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf\">https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://martinfowler.com/bliki/FeatureBranch.html\">https://martinfowler.com/bliki/FeatureBranch.html</a></li>\n<li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.continuousdeliveryconsulting.com/blog/organisation-antipattern-build-feature-branching/\">https://www.continuousdeliveryconsulting.com/blog/organisation-antipattern-build-feature-branching/</a></li>\n</ul>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitflow.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "gitlab",
          "release": "2019-11-01",
          "title": "Gitlab",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitlab.md",
          "body": "<p>Moved to &quot;adopt&quot;: Gitlab has proven to be a very useful tool for code and the collaboration around it.\nWith <a href=\"/techradar/tools/gitlab-ci.html\">Gitlab CI</a> there is also a powerful tool to automate continuous integration and delivery.</p>\n"
        },
        {
          "name": "gitlab",
          "release": "2018-03-01",
          "title": "Gitlab",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gitlab.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://about.gitlab.com/\">Gitlab</a> provides nearly the same feature set as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/\">Github</a>, but at a lower price. It also provides the possibility of hosting iternally, which is essential for us.</p>\n<p>We are migrating more and more repositories from <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://gitolite.com/gitolite/index.html\">gitolite</a>, even from SVN to gitlab, as it provides a more stable and user friendly interface.</p>\n<p>Gitlab also makes user/permission handling easier than our old gitolite. We don&#39;t need the IT team every time a new repository needs to be set up.</p>\n"
        }
      ],
      "name": "gitlab",
      "title": "Gitlab",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Moved to &quot;adopt&quot;: Gitlab has proven to be a very useful tool for code and the collaboration around it.\nWith <a href=\"/techradar/tools/gitlab-ci.html\">Gitlab CI</a> there is also a powerful tool to automate continuous integration and delivery.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitlab.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "gitlab-ci",
          "release": "2019-11-01",
          "title": "Gitlab CI",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitlab-ci.md",
          "body": "<p>Moved to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "gitlab-ci",
          "release": "2018-03-01",
          "title": "Gitlab CI",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gitlab-ci.md",
          "body": "<p>Until now, we have been using <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://jenkins.io/\">Jenkins</a> for almost every single task that we have automated. With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://about.gitlab.com/features/gitlab-ci-cd/\">Gitlab CI</a> on the market, we have a number of new possibilities.</p>\n<p>Some of the highlights are:</p>\n<ul>\n<li>Multi-platform – you can execute builds on Unix, Windows, OSX, and any other platform that supports Go.</li>\n<li>Multi-language – build scripts are command-line driven and work with Java, PHP, Ruby, C and any other language.</li>\n<li>Pipeline – you can define multiple jobs per stage and you can trigger other builds.</li>\n<li>Autoscaling – you can automatically spin up and down VM&#39;s to make sure your builds get processed immediately and minimize costs.</li>\n<li>Build artifacts – you can upload binaries and other build artifacts to GitLab and browse and download them.</li>\n<li>Docker support – you can use custom Docker images, spin up services as part of testing, build new Docker images, even run on Kubernetes. </li>\n</ul>\n"
        }
      ],
      "name": "gitlab-ci",
      "title": "Gitlab CI",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Moved to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\gitlab-ci.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "go-lang",
          "release": "2019-11-01",
          "title": "Go / Golang",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\go-lang.md",
          "body": "<p>We have moved Go to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "go-lang",
          "release": "2018-03-01",
          "title": "Go / Golang",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\go-lang.md",
          "body": "<p>We have moved Go to Trial because multiple teams have used Go with success for different services and tools.\nThe learning curve and productivity have proven to be immense and we are convinced that this language will find more adoption in other teams.</p>\n"
        },
        {
          "name": "go-lang",
          "release": "2017-03-01",
          "title": "Go / Golang",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\go-lang.md",
          "body": "<p>2016 was the year of Go, with a lot of Open Source projects gaining a lot of attention and many companies started to use it.</p>\n<p>Go went from #54 to #13 on the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.tiobe.com/tiobe-index/\">TIOBE index</a> in January 2017, and it became the TIOBE programming language of the year 2016.</p>\n<p>Here at AOE, we use several services written in Go on a daily basis, such as Mattermost, Docker, Consul and Kubernetes. Also, more and more applications, such as Gitlab, incorporate Go-based services to &quot;off load&quot; heavy work.</p>\n<p>Go, as a programming language, has some very interesting features such as native support for concurrency (go routines), static compiled binaries with a very small memory footprint, cross compiling and much more. A big advantage of Go is the very flat learning curve, which allows developers from more dynamic languages such as PHP to be proficient in a very short time.</p>\n<p>If you want to get a feeling for Go, you should start with the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://tour.golang.org/welcome/1\">online tour</a>, within a day you&#39;ll have a good understanding of the core concepts, syntax, etc. - that is also because the language often tries to provide only one simple way of doing things; an example for this is that code formatting and styling is defined (yet not enforced as in Python). Part of this is also that Go itself is very opinionated: So, for example, for object oriented programming in Go, composition is the prefered way of defining data structures, and some might miss advanced concepts such as inheritance.</p>\n<p>We currently use Go for projects and microservices where we need flexibility and performance.</p>\n"
        }
      ],
      "name": "go-lang",
      "title": "Go / Golang",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>We have moved Go to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\go-lang.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "gradle",
          "release": "2017-03-01",
          "title": "Gradle",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\gradle.md",
          "body": "<p>Gradle is a build automation tool originating in the Java space, providing declarative dependency management (like Maven) and support for custom functionality (like Ant). It has superb multi-project support and is extremely extensible via third-party plugins and also via self-written extensions and plugins that make it outstanding in its area.</p>\n<p>It uses a Groovy-based DSL to declaratively model your problem domain (Build automation) and provides a rich object model with extension points to customize the build logic. Because it is extremely easy to extend this DSL, you can easily provide a declarative interface to your customizations and add-ons.</p>\n<p>While providing plugins for building libs, apps and webapps in Java, Groovy and Scala out of the box it is not tied to the JVM as target platform, which is impressively shown by the native build support for C / C++.</p>\n<p>At AOE, it is used in various places already: to build <a href=\"/techradar/tools/anypoint-platform.html\">Anypoint</a>- and <a href=\"/techradar/languages-and-frameworks/spring-boot.html\">Spring Boot-</a> based applications; to build Android Apps; to automate the creation of Jenkins Jobs; to create Docker images and Debian packages and also do some deployment scripting with it.</p>\n"
        }
      ],
      "name": "gradle",
      "title": "Gradle",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Gradle is a build automation tool originating in the Java space, providing declarative dependency management (like Maven) and support for custom functionality (like Ant). It has superb multi-project support and is extremely extensible via third-party plugins and also via self-written extensions and plugins that make it outstanding in its area.</p>\n<p>It uses a Groovy-based DSL to declaratively model your problem domain (Build automation) and provides a rich object model with extension points to customize the build logic. Because it is extremely easy to extend this DSL, you can easily provide a declarative interface to your customizations and add-ons.</p>\n<p>While providing plugins for building libs, apps and webapps in Java, Groovy and Scala out of the box it is not tied to the JVM as target platform, which is impressively shown by the native build support for C / C++.</p>\n<p>At AOE, it is used in various places already: to build <a href=\"/techradar/tools/anypoint-platform.html\">Anypoint</a>- and <a href=\"/techradar/languages-and-frameworks/spring-boot.html\">Spring Boot-</a> based applications; to build Android Apps; to automate the creation of Jenkins Jobs; to create Docker images and Debian packages and also do some deployment scripting with it.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\gradle.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "grafana",
          "release": "2019-11-01",
          "title": "Grafana",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grafana.md",
          "body": "<p>Updated to &quot;adopt&quot;</p>\n"
        },
        {
          "name": "grafana",
          "release": "2018-03-01",
          "title": "Grafana",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\grafana.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://grafana.com//\">Grafana</a> is an Open Source data visualization platform written in Go and NodeJS. It provides a vast choice of different graph types that can be easily combined into dashboards for displaying any kind of numerical or time-based data.</p>\n<p>At AOE, we usually use Grafana in conjunction with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://prometheus.io/\">Prometheus</a> or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://prometheus.io/\">AWS CloudWatch</a> for visualizing both application and infrastructure metrics.</p>\n"
        }
      ],
      "name": "grafana",
      "title": "Grafana",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Updated to &quot;adopt&quot;</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grafana.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "graphql",
          "release": "2019-11-01",
          "title": "GraphQL",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\graphql.md",
          "body": "<p>GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn&#39;t tied to any specific database or storage engine and is instead backed by your existing code and data.</p>\n<p>GraphQL was developed by Facebook around 2010 and releases 2015. \nThe main challenge it solves is to improve communication between browser and server on high dynamic web apps.</p>\n<p>The advantages are:</p>\n<ul>\n<li>schema and schema validation together with a useful type system</li>\n<li>the client (browser) controls what data should be send (data reduction)</li>\n<li>whith one request you can fetch &quot;all&quot; required data</li>\n</ul>\n<p>We are using it together with <a href=\"/techradar/tools/apollo-client.html\">Apollo Client</a> in our <a href=\"/techradar/languages-and-frameworks/react.html\">React.js</a> based frontend.\nThis way the React components have their relevant GraphQL snippet, defining what data they request or mutate from the &quot;backend for frontend&quot;, directly coupled. \nThat makes it transparent what data is available. Apollo takes care of sending an aggregated GraphQL query to the backend.</p>\n<p>The framework <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.flamingo.me/3.%20Flamingo%20Modules/graphql.html\">Flamingo offers support for GraphQL</a> and also Flamingo Commerce offers a full featured GraphQL API for e-commerce features. (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://demoshop.flamingo.me/en/graphql-console\">Example GraphQL Console for Commerce</a>)</p>\n"
        }
      ],
      "name": "graphql",
      "title": "GraphQL",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn&#39;t tied to any specific database or storage engine and is instead backed by your existing code and data.</p>\n<p>GraphQL was developed by Facebook around 2010 and releases 2015. \nThe main challenge it solves is to improve communication between browser and server on high dynamic web apps.</p>\n<p>The advantages are:</p>\n<ul>\n<li>schema and schema validation together with a useful type system</li>\n<li>the client (browser) controls what data should be send (data reduction)</li>\n<li>whith one request you can fetch &quot;all&quot; required data</li>\n</ul>\n<p>We are using it together with <a href=\"/techradar/tools/apollo-client.html\">Apollo Client</a> in our <a href=\"/techradar/languages-and-frameworks/react.html\">React.js</a> based frontend.\nThis way the React components have their relevant GraphQL snippet, defining what data they request or mutate from the &quot;backend for frontend&quot;, directly coupled. \nThat makes it transparent what data is available. Apollo takes care of sending an aggregated GraphQL query to the backend.</p>\n<p>The framework <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.flamingo.me/3.%20Flamingo%20Modules/graphql.html\">Flamingo offers support for GraphQL</a> and also Flamingo Commerce offers a full featured GraphQL API for e-commerce features. (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://demoshop.flamingo.me/en/graphql-console\">Example GraphQL Console for Commerce</a>)</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\graphql.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "groovy",
          "release": "2019-11-01",
          "title": "Groovy",
          "ring": "hold",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\groovy.md",
          "body": "<p>Since the rise of Kotlin, we seen no need why to still use Groovy as an alternative to Java running on the JVM.</p>\n"
        },
        {
          "name": "groovy",
          "release": "2017-03-01",
          "title": "Groovy",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\groovy.md",
          "body": "<p>Groovy is a dynamically typed compiled language running on the JVM. It is easy to learn as it provides a familiar syntax for Java programmers, but also offers advanced features such as closures and makes some mandatory Java syntax requirements optional to enhance the conciseness of the code. These features make Groovy especially well-suited for scripting and domain-specific languages. This is used by popular tools such as Gradle or Spock.</p>\n<p>At AOE, Groovy is used in many projects and areas. We use Gradle as a build system, we carry out unit and integration testing with Spock and Geb, we generate Jenkins jobs with JobDSL and we implement complete services with Groovy and <a href=\"/techradar/languages-and-frameworks/spring-boot.html\">Spring Boot</a>.</p>\n"
        }
      ],
      "name": "groovy",
      "title": "Groovy",
      "ring": "hold",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Since the rise of Kotlin, we seen no need why to still use Groovy as an alternative to Java running on the JVM.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\groovy.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "grpc",
          "release": "2019-11-01",
          "title": "GRPC",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grpc.md",
          "body": "<p>We adopted GRPC, because its used on multiple places within our microservice oriented architectures for internal communication.</p>\n"
        },
        {
          "name": "grpc",
          "release": "2018-03-01",
          "title": "GRPC",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\grpc.md",
          "body": "<p>gRPC, &quot;A high-performance, Open Source, universal RPC framework,&quot; is a framework to easily connect clients and servers in an RPC setup.\ngRPC was initially built at Google, and uses protobuf service definitions for method and payload specification.\nEssentially, this makes it possible to define methods that a server exposes, with either a single payload or an incoming stream - either as a single response or a stream of responses.\nThe definition itself is carried out with the help of protobuf to define message types and method signatures, and then client and server interfaces are compiled for the language(s) you want. Currently there is support for languages such as C++, Java, Python, Go and many more.\nThe shared language-neutral protobuf definition allows you to create all code for all languages automatically and helps with the interoperability of different systems.</p>\n<p>From a technical point of view, gRPC uses HTTP/2 as a transport, directly benefitting from the default TLS encryption.\nBesides gRPC, other frameworks also use protobuf RPC definitions. These frameworks include twirp from twitch, which makes it easy to change the transport/control layer with only very small changes to the application code.</p>\n<p>We at AOE plan to assess gRPC for microservice architectures which are more RPC style and less REST style.</p>\n"
        }
      ],
      "name": "grpc",
      "title": "GRPC",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>We adopted GRPC, because its used on multiple places within our microservice oriented architectures for internal communication.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grpc.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "grunt",
          "release": "2019-11-01",
          "title": "Grunt",
          "ring": "hold",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grunt.md",
          "body": ""
        },
        {
          "name": "grunt",
          "release": "2017-03-01",
          "title": "Grunt",
          "ring": "hold",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\grunt.md",
          "body": "<p>Grunt is a JavaScript task runner that automates repetitive tasks. While Grunt served us well for a good amount of projects,\nother alternatives such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://gulpjs.com/\">Gulp</a> emerged in the meantime and proved to be a better pick for the\nmajority of our teams.</p>\n<p>We have two main reasons for discarding Grunt in favor of other tools:</p>\n<h3 id=\"speed\">Speed</h3>\n<p>If a decent amount of tasks is reached, Grunt is known to run slower than other tools, because it heavily relies on I/O operations and\nalways stores the result of one task as files on the disk.</p>\n<h3 id=\"configuration\">Configuration</h3>\n<p>On large projects where a lot of automation is required, it can get very tedious to maintain complex and parallel running tasks.\nThe grunt configuration files sometimes simply don´t gave us the flexibility that we needed.</p>\n<p>Currently our preferred way to go is either simply use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/misc/scripts\">NPM scripts</a> or rely on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/concepts/loaders/\">Webpack loaders</a> for file preprocessing. For non-webpack projects we also utilize Gulp.</p>\n"
        }
      ],
      "name": "grunt",
      "title": "Grunt",
      "ring": "hold",
      "quadrant": "tools",
      "body": "<p>Grunt is a JavaScript task runner that automates repetitive tasks. While Grunt served us well for a good amount of projects,\nother alternatives such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://gulpjs.com/\">Gulp</a> emerged in the meantime and proved to be a better pick for the\nmajority of our teams.</p>\n<p>We have two main reasons for discarding Grunt in favor of other tools:</p>\n<h3 id=\"speed\">Speed</h3>\n<p>If a decent amount of tasks is reached, Grunt is known to run slower than other tools, because it heavily relies on I/O operations and\nalways stores the result of one task as files on the disk.</p>\n<h3 id=\"configuration\">Configuration</h3>\n<p>On large projects where a lot of automation is required, it can get very tedious to maintain complex and parallel running tasks.\nThe grunt configuration files sometimes simply don´t gave us the flexibility that we needed.</p>\n<p>Currently our preferred way to go is either simply use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/misc/scripts\">NPM scripts</a> or rely on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/concepts/loaders/\">Webpack loaders</a> for file preprocessing. For non-webpack projects we also utilize Gulp.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\grunt.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "gulp",
          "release": "2018-03-01",
          "title": "Gulp",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gulp.md",
          "body": ""
        },
        {
          "name": "gulp",
          "release": "2017-03-01",
          "title": "Gulp",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\gulp.md",
          "body": "<p>Gulp is a javascript task runner much like Grunt. The tasks are written in javascript code.</p>\n<p>It is a tool that helps you automate numerous tasks surrounding web development. A typical use is to configure preprocessors for Sass, to compile CSS or to optimize CSS, Javascript and Images.</p>\n<p>With Gulp and its many plugins you can also do stuff such as start a web server and reload the browser if changes happen.</p>\n<p>To get started you need to install Gulp on your machine via npm.</p>\n<pre><code class=\"language-javascript\">npm <span class=\"hljs-keyword\">install</span> gulp -g\n</code></pre>\n<p>You also need it locally in your project, so you have to install it as a dependency in your project .</p>\n<pre><code class=\"language-javascript\">npm install gulp --<span class=\"hljs-built_in\">save</span>-<span class=\"hljs-built_in\">dev</span>\n</code></pre>\n<p>You can split your tasks into various smaller sub-tasks and even split it up into smaller files.</p>\n<p>A basic Gulp task can look like this:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-keyword\">const</span> gulp = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp&#x27;</span>);\n<span class=\"hljs-comment\">// Requires the gulp-sass plugin</span>\n<span class=\"hljs-keyword\">const</span> sass = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-sass&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> autoprefixer = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-autoprefixer&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> cssnano = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-cssnano&#x27;</span>);\n\ngulp.<span class=\"hljs-title function_\">task</span>(<span class=\"hljs-string\">&#x27;sass&#x27;</span>, <span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>){\n  <span class=\"hljs-keyword\">return</span> gulp.<span class=\"hljs-title function_\">src</span>(<span class=\"hljs-string\">&#x27;app/scss/**/*.scss&#x27;</span>) <span class=\"hljs-comment\">// tell gulp where your source files are</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">sass</span>()) <span class=\"hljs-comment\">// Converts sass into css with the help of a gulp plugin called gulp-sass</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">autoprefixer</span>({<span class=\"hljs-attr\">browsers</span>: [<span class=\"hljs-string\">&#x27;last 2 versions&#x27;</span>]})) <span class=\"hljs-comment\">// auto prefixes the css for the last 2 versions of browser, like ie9 specific css</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">cssnano</span>()) <span class=\"hljs-comment\">// minify the css</span>\n    .<span class=\"hljs-title function_\">pipe</span>(gulp.<span class=\"hljs-title function_\">dest</span>(<span class=\"hljs-string\">&#x27;app/css&#x27;</span>)) <span class=\"hljs-comment\">// tell gulp where to put the converted file. this is the first time where a file is written</span>\n});\n</code></pre>\n<p>you can now run this task simply by executing the following command in your terminal:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-attribute\">gulp sass</span>\n</code></pre>\n"
        }
      ],
      "name": "gulp",
      "title": "Gulp",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Gulp is a javascript task runner much like Grunt. The tasks are written in javascript code.</p>\n<p>It is a tool that helps you automate numerous tasks surrounding web development. A typical use is to configure preprocessors for Sass, to compile CSS or to optimize CSS, Javascript and Images.</p>\n<p>With Gulp and its many plugins you can also do stuff such as start a web server and reload the browser if changes happen.</p>\n<p>To get started you need to install Gulp on your machine via npm.</p>\n<pre><code class=\"language-javascript\">npm <span class=\"hljs-keyword\">install</span> gulp -g\n</code></pre>\n<p>You also need it locally in your project, so you have to install it as a dependency in your project .</p>\n<pre><code class=\"language-javascript\">npm install gulp --<span class=\"hljs-built_in\">save</span>-<span class=\"hljs-built_in\">dev</span>\n</code></pre>\n<p>You can split your tasks into various smaller sub-tasks and even split it up into smaller files.</p>\n<p>A basic Gulp task can look like this:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-keyword\">const</span> gulp = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp&#x27;</span>);\n<span class=\"hljs-comment\">// Requires the gulp-sass plugin</span>\n<span class=\"hljs-keyword\">const</span> sass = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-sass&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> autoprefixer = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-autoprefixer&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> cssnano = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">&#x27;gulp-cssnano&#x27;</span>);\n\ngulp.<span class=\"hljs-title function_\">task</span>(<span class=\"hljs-string\">&#x27;sass&#x27;</span>, <span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>){\n  <span class=\"hljs-keyword\">return</span> gulp.<span class=\"hljs-title function_\">src</span>(<span class=\"hljs-string\">&#x27;app/scss/**/*.scss&#x27;</span>) <span class=\"hljs-comment\">// tell gulp where your source files are</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">sass</span>()) <span class=\"hljs-comment\">// Converts sass into css with the help of a gulp plugin called gulp-sass</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">autoprefixer</span>({<span class=\"hljs-attr\">browsers</span>: [<span class=\"hljs-string\">&#x27;last 2 versions&#x27;</span>]})) <span class=\"hljs-comment\">// auto prefixes the css for the last 2 versions of browser, like ie9 specific css</span>\n    .<span class=\"hljs-title function_\">pipe</span>(<span class=\"hljs-title function_\">cssnano</span>()) <span class=\"hljs-comment\">// minify the css</span>\n    .<span class=\"hljs-title function_\">pipe</span>(gulp.<span class=\"hljs-title function_\">dest</span>(<span class=\"hljs-string\">&#x27;app/css&#x27;</span>)) <span class=\"hljs-comment\">// tell gulp where to put the converted file. this is the first time where a file is written</span>\n});\n</code></pre>\n<p>you can now run this task simply by executing the following command in your terminal:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-attribute\">gulp sass</span>\n</code></pre>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\gulp.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "hal-hateoas",
          "release": "2019-11-01",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\hal-hateoas.md",
          "body": "<p>We use HAL in cases where we need to link ressources in payloads. HATEOAS has not proven to be very useful in our projects.</p>\n"
        },
        {
          "name": "hal-hateoas",
          "release": "2018-03-01",
          "title": "HAL / HATEOAS",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\hal-hateoas.md",
          "body": "<p>We still recommend the usage of HAL and HATEOAS.</p>\n<p>But, depending on the resource structure, there are some pitfalls to be aware of:</p>\n<ul>\n<li>Increased amount of HTTP calls</li>\n<li>Parallelization of client-side calls is more difficult or even impossible when following links on heavily nested resource structures</li>\n<li>Consumer side code might get larger  </li>\n</ul>\n"
        },
        {
          "name": "hal-hateoas",
          "release": "2017-03-01",
          "title": "HAL / HATEOAS",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\hal-hateoas.md",
          "body": "<p>Hypermedia As The Engine Of Application State or in short HATEOAS is a pattern that helps to organize dependencies and resources in a RESTful API. The basic idea of HATEOAS is that an API consumer do not have to know how dependencies of resources are connected and how to get them. A consumer must only be familiar with the basics of hypermedia.</p>\n<p>Let&#39;s assume we have a bank account and an action to deposit money on that account. Everything you need to know is that the account resource has an action for a deposit. The URL of that action can then fetched from the link attribute with the corresponding relation.</p>\n<pre><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">account</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">account_number</span>&gt;</span>12345<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">account_number</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">balance</span> <span class=\"hljs-attr\">currency</span>=<span class=\"hljs-string\">&quot;usd&quot;</span>&gt;</span>-25.00<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">balance</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;deposit&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;https://bank.example.com/account/12345/deposit&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">account</span>&gt;</span>\n</code></pre>\n<p>Besides from HATEOAS there is an alternative implementation called Hypertext Application Language, in short HAL, which has much more features than the basic HATEOAS.</p>\n<p>With HAL you are allowed to also define parametrized links, embedded resources and documentation relations (which are called curies). You can find the specification here.\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://stateless.co/hal_specification.html\">http://stateless.co/hal_specification.html</a></p>\n<p>If you want to link different api endpoints or ressource locations in your API responses you should use this standard.</p>\n"
        }
      ],
      "name": "hal-hateoas",
      "title": "HAL / HATEOAS",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>We use HAL in cases where we need to link ressources in payloads. HATEOAS has not proven to be very useful in our projects.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\hal-hateoas.md"
    },
    {
      "flag": FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "helm",
          "release": "2021-01-01",
          "title": "Helm",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\helm.md",
          "body": ""
        },
        {
          "name": "helm",
          "release": "2019-11-01",
          "title": "Helm",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\helm.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://helm.sh/\">Helm</a> is a package manager for <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://kubernetes.io/\">Kubernetes</a>, which simplifies the deployment\nof applications into a Kubernetes cluster and provides additional features like e.g. versioning and rollbacks.</p>\n"
        },
        {
          "name": "helm",
          "release": "2018-03-01",
          "title": "Helm",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\helm.md",
          "body": "<p>For managing deployments within Kubernetes we use Helm, which makes templating Kubernetes configuration files super easy (also known as Helm charts).</p>\n"
        }
      ],
      "name": "helm",
      "title": "Helm",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://helm.sh/\">Helm</a> is a package manager for <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://kubernetes.io/\">Kubernetes</a>, which simplifies the deployment\nof applications into a Kubernetes cluster and provides additional features like e.g. versioning and rollbacks.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\helm.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "hystrix",
          "release": "2019-11-01",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\hystrix.md",
          "body": "<p>Hystrix is not actively mainatined anymore and some of its goals can now be handled with service meshs.</p>\n"
        },
        {
          "name": "hystrix",
          "release": "2017-03-01",
          "title": "Hystrix ",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\hystrix.md",
          "body": "<p>Hystrix is a very powerful library for handling failures, fallbacks and latency management within complex distributed environments. Netflix developed it and after years of experience, they are using it in almost each of their microservices. It evolved to a great library for handling resilience in complex architectures and covers solutions for the most common resilience patterns like:</p>\n<ul>\n<li>  Fail fasts</li>\n<li>  Fail silent</li>\n<li>  Circuit Breaker</li>\n<li>  Fallbacks (Static, Stubbed)</li>\n</ul>\n<p>Beside from that purposes Hystrix also offers some helpful features like parallel and asynchronous execution, In-Request-Caching and other useful features for working with distributed systems.</p>\n<p>Another useful component that you are able to use with Hystrix is his dashboard that give you the ability of real time monitoring of external dependencies and how they behave. Alerting is also able via the dashboard.</p>\n"
        }
      ],
      "name": "hystrix",
      "title": "Hystrix ",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>Hystrix is not actively mainatined anymore and some of its goals can now be handled with service meshs.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\hystrix.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "imgix",
          "release": "2017-03-01",
          "title": "imgix",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\imgix.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.imgix.com/\">Imgix</a> is an SaaS solution for delivering and processing images. When developing responsive websites, you will quickly reach the point where you need various versions of your images to achieve a good responsive user interface. You want high quality versions for retina displays but small versions for mobile devices with a slow Internet connection.</p>\n<p>Especially when dealing with user-generated uploads, it is getting hard to create different versions for any supported device and breakpoint of your web page. Doing this manually is hardly an option.</p>\n<p>At AOE, we decided to use imgix as an image processing service for some projects to solve this problem. The benefits of imgix are the simple API to create responsive images in real-time as well as the fast delivery over their CDN.</p>\n"
        }
      ],
      "name": "imgix",
      "title": "imgix",
      "ring": "assess",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.imgix.com/\">Imgix</a> is an SaaS solution for delivering and processing images. When developing responsive websites, you will quickly reach the point where you need various versions of your images to achieve a good responsive user interface. You want high quality versions for retina displays but small versions for mobile devices with a slow Internet connection.</p>\n<p>Especially when dealing with user-generated uploads, it is getting hard to create different versions for any supported device and breakpoint of your web page. Doing this manually is hardly an option.</p>\n<p>At AOE, we decided to use imgix as an image processing service for some projects to solve this problem. The benefits of imgix are the simple API to create responsive images in real-time as well as the fast delivery over their CDN.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\imgix.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "infrastructure-as-code",
          "release": "2019-11-01",
          "title": "Infrastructure as Code",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\infrastructure-as-code.md",
          "body": "<p>Updated to &quot;adopt&quot;</p>\n"
        },
        {
          "name": "infrastructure-as-code",
          "release": "2017-03-01",
          "title": "Infrastructure as Code",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\infrastructure-as-code.md",
          "body": "<p>Infrastructure as Code (IaC) describes the process of managing all infrastructure resources via code. Treating infrastructure code the same way we treat application code, we can benefit from the same advantages of having a history in our version control system, doing code reviews and rolling out updates via a Continuous Delivery pipeline in a way that closely approaches how we handle application deployments.</p>\n<p>Infrastructure code is often described in a declarative language und the target platforms figure out what to create, update or delete in order to get to the desired state, while doing this in a safe and efficient way. We&#39;ve worked with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/de/cloudformation/\">AWS CloudFormation</a> in the past, and while this is a great tool, you can only manage AWS resources with it and you need some more tooling around it in order to automate things nicely and embed it into other processes such as Jenkins Jobs. That&#39;s what we created <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/AOEpeople/StackFormation\">StackFormation</a> for. Another tool that is actively developed is <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.terraform.io/\">Terraform</a>. Terraform comes with a lot of concepts that make managing environments easier out of the box and nicely embeds into other related tools. Also, Terraform allows you to manage a variety of different infrastructure providers.</p>\n<p>Infrastructure as code should cover everything from orchestration of your infrastructure resources, networking and provisioning as well as monitoring setup. The orchestration tools mentioned above are supplemented by other tools such as Puppet, Chef or simple Bash scripts that take over provisioning the instances after they are booted.</p>\n"
        }
      ],
      "name": "infrastructure-as-code",
      "title": "Infrastructure as Code",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Updated to &quot;adopt&quot;</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\infrastructure-as-code.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "invision",
          "release": "2018-03-01",
          "title": "Invision",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\invision.md",
          "body": "<p>Invision is an online tool used to work and collaborate on design and prototypes and to share them between clients and the team.</p>\n<p>We use it in many projects now to present prototypes and designs and it helps in understanding the planned user experience.\nAlso, we use this directly as a reference from the user stories to help the development teams in understanding and implementing the right frontend and backend functionalities.</p>\n"
        }
      ],
      "name": "invision",
      "title": "Invision",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>Invision is an online tool used to work and collaborate on design and prototypes and to share them between clients and the team.</p>\n<p>We use it in many projects now to present prototypes and designs and it helps in understanding the planned user experience.\nAlso, we use this directly as a reference from the user stories to help the development teams in understanding and implementing the right frontend and backend functionalities.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\invision.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "jaeger",
          "release": "2019-11-01",
          "title": "Jaeger",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\jaeger.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.jaegertracing.io/\">Jaeger</a> is a tool for <a href=\"/techradar/platforms-and-aoe-services/distributed-tracing.html\">Distributed Tracing</a>. Developed at Uber and inspired by Dapper and OpenZipkin it grew into an <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.cncf.io/\">Cloud Native Computing Foundation</a> project.</p>\n<p>Jaeger is a great tool for troubleshooting distributed systems, such as microservice architectures. Developers and Operation can quickly see communicaiton between services, and what data is communicated where.\nErrors in services can be traced to the originating system. Global trace identifiers are communicated using B3 headers. Jaeger supports Zipkin, which allows easy migration von OpenZipkin &amp; co.</p>\n"
        }
      ],
      "name": "jaeger",
      "title": "Jaeger",
      "ring": "trial",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.jaegertracing.io/\">Jaeger</a> is a tool for <a href=\"/techradar/platforms-and-aoe-services/distributed-tracing.html\">Distributed Tracing</a>. Developed at Uber and inspired by Dapper and OpenZipkin it grew into an <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.cncf.io/\">Cloud Native Computing Foundation</a> project.</p>\n<p>Jaeger is a great tool for troubleshooting distributed systems, such as microservice architectures. Developers and Operation can quickly see communicaiton between services, and what data is communicated where.\nErrors in services can be traced to the originating system. Global trace identifiers are communicated using B3 headers. Jaeger supports Zipkin, which allows easy migration von OpenZipkin &amp; co.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\jaeger.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "jest",
          "release": "2018-03-01",
          "title": "Jest",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\jest.md",
          "body": "<p>Updated to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "jest",
          "release": "2017-03-01",
          "title": "Jest ",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\jest.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://facebook.github.io/jest/\">Jest</a> is a javascript testing framework by facebook to test javascript code <strong>and</strong> react applications / components.</p>\n<p>We started using Jest (and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/facebook/watchman\">watchmen</a>) instead of Karma because it:</p>\n<ul>\n<li>  gives us integrated mocking library</li>\n<li>  gives us integrated support for testing &quot;promises&quot;</li>\n<li>  gives us integrated code coverage report</li>\n<li>  automatically runs tests related to changed files (instead of all tests)</li>\n<li>  gives us parallel test execution</li>\n<li>  gives us snapshot testing for react components</li>\n</ul>\n<p>It is easy to set up. And even if you have a running setup with karma/chai you can easily replace karma with jest. With a small <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@RubenOostinga/combining-chai-and-jest-matchers-d12d1ffd0303#.3callo273\">workaround</a>, chai and jest test matchers work fine together.</p>\n"
        }
      ],
      "name": "jest",
      "title": "Jest",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Updated to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\jest.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "job-dsl",
          "release": "2017-03-01",
          "title": "Job DSL (Jenkins)",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\job-dsl.md",
          "body": "<p>The <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin\">Job DSL </a>is a plugin for the Jenkins automation server. Jenkins jobs that automate parts of a software project are usually configured using the web interface of Jenkins. If Jenkins is the choice for your project and the number of build jobs tend to grow, the Job DSL plugin is your friend.</p>\n<p>The plugin allows Jenkins jobs to be described by code (Groovy DSL). This code is then used for generating Jenkins jobs. As a consequence, job configuration can be part of the project&#39;s source code. During the generation step, existing jobs are synchronized, overwritten or left alone, depending on the configuration. The same configuration manages deleting or ignoring jobs that are not described in code anymore. Jobs can easily be restored in case of data loss and changed without clicking buttons for hours. The automation also makes it easy to seed large numbers of homogeneous components and builds on different branches.</p>\n<p>The ability to treat Jenkins jobs as code is a big advantage. We highly suggest that every team automate the setup of their jobs and their pipelines. Another way of expressing build pipelines as code is the new <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://jenkins.io/doc/book/pipeline/\">Jenkins Pipeline</a> feature - but still we see the need of Job DSL seeder jobs to seed the Jenkins pipeline jobs themselves and any additional jobs.</p>\n"
        }
      ],
      "name": "job-dsl",
      "title": "Job DSL (Jenkins)",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>The <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin\">Job DSL </a>is a plugin for the Jenkins automation server. Jenkins jobs that automate parts of a software project are usually configured using the web interface of Jenkins. If Jenkins is the choice for your project and the number of build jobs tend to grow, the Job DSL plugin is your friend.</p>\n<p>The plugin allows Jenkins jobs to be described by code (Groovy DSL). This code is then used for generating Jenkins jobs. As a consequence, job configuration can be part of the project&#39;s source code. During the generation step, existing jobs are synchronized, overwritten or left alone, depending on the configuration. The same configuration manages deleting or ignoring jobs that are not described in code anymore. Jobs can easily be restored in case of data loss and changed without clicking buttons for hours. The automation also makes it easy to seed large numbers of homogeneous components and builds on different branches.</p>\n<p>The ability to treat Jenkins jobs as code is a big advantage. We highly suggest that every team automate the setup of their jobs and their pipelines. Another way of expressing build pipelines as code is the new <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://jenkins.io/doc/book/pipeline/\">Jenkins Pipeline</a> feature - but still we see the need of Job DSL seeder jobs to seed the Jenkins pipeline jobs themselves and any additional jobs.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\job-dsl.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "keycloak",
          "release": "2018-03-01",
          "title": "Keycloak",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\keycloak.md",
          "body": "<p>Most distributed systems still face a growing demand for user management, authentication, authorization and Single sign-on. In light of a growing security demand and specialization, the Open Source project JBoss Keycloak is a perfect match. </p>\n<p>Keyloak has been a growing project from the outset and has a strong community. Keyloak is based on standards such as OAuth2, OIDC and SAML2. Securing a distributed system is supported by adapters, which are provided by Keycloak developers for different technology stacks. If there is no adapter for your technology stack, an integration on the protocol level with a library is simple. Many configurable features require no coding in the integrated projects. The required configuration is managed via code and promoted as usual. </p>\n<p>We use Keycloak in our OM3 suite for several authentication-related use cases – such as user management for system users and Single sign-on for customers. The OAuth access tokens can be used to secure APIs that access sensitive information. In addition, Keycloak is part of the AOE infrastructure and helps in securing the various services to support employees and customers.</p>\n"
        },
        {
          "name": "keycloak",
          "release": "2017-03-01",
          "title": "Keycloak",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\keycloak.md",
          "body": "<p>User management, authentication, authorization and Single Sign-On are part of most distributed systems nowadays. Building these sensitive and serious parts on your own might be a problem due to knowledge- and budget restrictions. Because of growing requirements in that field (social logins, single sign-on, federation, two-factor authentication, etc.), as well as growing security concerns, building these things on your own has become more challenging during the past decade.</p>\n<p>As a consequence, the recommendation is: use an existing solution and connect it with your project&#39;s codebase using provided standards. Our recommended solution is the Open Source project JBoss Keycloak. We use Keycloak in our OM3 suite for several authentication-related use cases - such as user management for system users and single sign-on for customers. The OAuth access tokens can be used to secure APIs that access sensitive information.</p>\n<p>Keyloak is based on standards such as OAuth2, OIDC and SAML2. Securing a distributed system is supported by adapters, which are provided by the Keycloak developers for different technology stacks. If there is no adapter for your technology stack, an integration on protocol level with a library is simple. A lot of configurable features require no coding in the integrated projects.</p>\n<p>By design, the Keycloak project offers customizability and extensibility via so-called SPIs, e.g. a custom authenticator can be implemented to address project specific problems.</p>\n<p>Keycloak normally runs standalone and can use various database products. A docker image is available to start in a containerized environment.</p>\n<p>Keycloak might be overkill, depending on your project needs. For a simple integration with, for instance, a social login provider (Facebock, Twitter, etc.) Keycloak might be too much. For a JVM project, the pac4j library might be an alternative. If a cloud-based solution is preferred and data privacy concerns are not an issue, Auth0 might be the choice.</p>\n"
        }
      ],
      "name": "keycloak",
      "title": "Keycloak",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Most distributed systems still face a growing demand for user management, authentication, authorization and Single sign-on. In light of a growing security demand and specialization, the Open Source project JBoss Keycloak is a perfect match. </p>\n<p>Keyloak has been a growing project from the outset and has a strong community. Keyloak is based on standards such as OAuth2, OIDC and SAML2. Securing a distributed system is supported by adapters, which are provided by Keycloak developers for different technology stacks. If there is no adapter for your technology stack, an integration on the protocol level with a library is simple. Many configurable features require no coding in the integrated projects. The required configuration is managed via code and promoted as usual. </p>\n<p>We use Keycloak in our OM3 suite for several authentication-related use cases – such as user management for system users and Single sign-on for customers. The OAuth access tokens can be used to secure APIs that access sensitive information. In addition, Keycloak is part of the AOE infrastructure and helps in securing the various services to support employees and customers.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\keycloak.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "kotlin",
          "release": "2019-11-01",
          "title": "Kotlin",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\kotlin.md",
          "body": "<p>Kotlin is used successfully in production by multiple teams.</p>\n<p>Kotlin is 100% interoperable with Java. It means the code can live side-by-side in one code base and interact.\nFrom the beginning it was designed with practical thought in mind. So the IDE Support in IntelliJ is really great.  </p>\n<p>The Spring Framework Developer put a lot of effort that Springs play well together with Kotlin. </p>\n<p>With it&#39;s concise syntax, null safety, \nDue to its explicit type system, this language is also great replacement for Groovy usage with Gradle.</p>\n"
        }
      ],
      "name": "kotlin",
      "title": "Kotlin",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Kotlin is used successfully in production by multiple teams.</p>\n<p>Kotlin is 100% interoperable with Java. It means the code can live side-by-side in one code base and interact.\nFrom the beginning it was designed with practical thought in mind. So the IDE Support in IntelliJ is really great.  </p>\n<p>The Spring Framework Developer put a lot of effort that Springs play well together with Kotlin. </p>\n<p>With it&#39;s concise syntax, null safety, \nDue to its explicit type system, this language is also great replacement for Groovy usage with Gradle.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\kotlin.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "kubernetes",
          "release": "2018-03-01",
          "title": "Kubernetes",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\kubernetes.md",
          "body": "<p>Kubernetes has developed into the quasi-standard for container orchestration: Nearly every cloud provider provides managed Kubernetes, and even Docker Enterprise uses Kubernetes.\nWe are running several production systems with Kubernetes and we are using it in concepts such as:</p>\n<ul>\n<li>&quot;secrets&quot; and &quot;configmaps&quot; to manage configurations for the applications. By updating these resources with an automated configuration pipeline you have a great method for configuration management.</li>\n<li>Autoscaling of Kubernetes nodes and the usage of &quot;horizontal pod scaling&quot; inside Kubernetes allows elastic scaling</li>\n<li>The support of managing permissions with OAuth allows you to secure Kubernetes with <a href=\"/techradar/tools/keycloak.html\">Keycloak</a> (SSO)</li>\n<li>Kubernetes extensibility and API can be used for automation and customization. There is a growing ecosystem around extensions, which adds additional features.</li>\n</ul>\n"
        },
        {
          "name": "kubernetes",
          "release": "2017-03-01",
          "title": "Kubernetes",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\kubernetes.md",
          "body": "<p>Kubernetes is a container orchestration platform, which supports many different infrastructure providers. It allows you to deploy containers and takes care of running, scaling or self-healing your applications based on configurations you provide. It&#39;s based on years of knowledge and experience Google gained by using containers.</p>\n<p>At AOE, we started Kubernetes in a test environment on bare metal to experiment with it. It&#39;s currently used for running AOE internal apps such as dashboards as well as running builds in containers. We also started to use it for upcoming projects to run and manage several services. There are Tools to automate the setup of kubernetes in AWS like <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://kubernetes.io/docs/getting-started-guides/kops/\">Cops</a>. Another helpful tool is <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/kubernetes/minikube\">Minikube</a>, which allows to test and run kubernetes locally.</p>\n"
        }
      ],
      "name": "kubernetes",
      "title": "Kubernetes",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Kubernetes has developed into the quasi-standard for container orchestration: Nearly every cloud provider provides managed Kubernetes, and even Docker Enterprise uses Kubernetes.\nWe are running several production systems with Kubernetes and we are using it in concepts such as:</p>\n<ul>\n<li>&quot;secrets&quot; and &quot;configmaps&quot; to manage configurations for the applications. By updating these resources with an automated configuration pipeline you have a great method for configuration management.</li>\n<li>Autoscaling of Kubernetes nodes and the usage of &quot;horizontal pod scaling&quot; inside Kubernetes allows elastic scaling</li>\n<li>The support of managing permissions with OAuth allows you to secure Kubernetes with <a href=\"/techradar/tools/keycloak.html\">Keycloak</a> (SSO)</li>\n<li>Kubernetes extensibility and API can be used for automation and customization. There is a growing ecosystem around extensions, which adds additional features.</li>\n</ul>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\kubernetes.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "maintain-third-party-packages",
          "release": "2017-03-01",
          "title": "Maintain third party packages",
          "ring": "hold",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\maintain-third-party-packages.md",
          "body": "<p>Rebuilding and packaging software from &quot;third parties&quot; (e.g. PHP, MySQL, Redis, Nginx, Java,...) implies starting to maintain the packaging for the desired distribution.</p>\n<p>Even with tool support and targeted for automation, we found that building those packages is very often unstable. The effort to keep up with the upstream changes (security changes, fixes, etc...) exceeds the benefit in most cases. We prefer to not create our own packages and rather use what&#39;s available in the distribution repository.</p>\n"
        }
      ],
      "name": "maintain-third-party-packages",
      "title": "Maintain third party packages",
      "ring": "hold",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Rebuilding and packaging software from &quot;third parties&quot; (e.g. PHP, MySQL, Redis, Nginx, Java,...) implies starting to maintain the packaging for the desired distribution.</p>\n<p>Even with tool support and targeted for automation, we found that building those packages is very often unstable. The effort to keep up with the upstream changes (security changes, fixes, etc...) exceeds the benefit in most cases. We prefer to not create our own packages and rather use what&#39;s available in the distribution repository.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\maintain-third-party-packages.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "micro-frontends",
          "release": "2019-11-01",
          "title": "Micro Frontends",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\micro-frontends.md",
          "body": "<p>When deciding on a system architecture we are always striving for technology neutralism. This is to allow us to stay\nflexible with future decisions. Micro Frontends can be a tool to support us with this goal.\nWe favor protocols and methods, such as plain HTML and HTTP, over specific technologies when designing Micro Frontends.</p>\n<p>Since Micro Frontends have proven to allow use move fast and agile, we moved this pattern to &quot;trial&quot;.</p>\n"
        },
        {
          "name": "micro-frontends",
          "release": "2018-03-01",
          "title": "Micro Frontends",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\micro-frontends.md",
          "body": "<p>We see many benefits in Microservices – especially in large teams – but often this architecture \ndoes not involve the user interface. Instead, you might end up maintaining a frontend monolith. With Micro Frontends \nyou enable your frontend developers to gain the same benefits that we have grown accustomed to in a Microservice architecture: \nDecoupled components, which are developed and deployed by independent teams. But what sounds reasonable comes with \nchallenges. Integrating different Frontends on the client- or server-side can be tricky, as well as keeping the overall \nUser Experience consistent.</p>\n<p>Despite the challenges, Micro Frontends help us to develop large applications across multiple teams. Developers can\nwork more independently without having too much trouble maintaining a large codebase. Being able to update oder \nreplace Frontend libraries in some parts of the application is yet another benefit in the fast-moving world of \nfrontend development.</p>\n"
        }
      ],
      "name": "micro-frontends",
      "title": "Micro Frontends",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>When deciding on a system architecture we are always striving for technology neutralism. This is to allow us to stay\nflexible with future decisions. Micro Frontends can be a tool to support us with this goal.\nWe favor protocols and methods, such as plain HTML and HTTP, over specific technologies when designing Micro Frontends.</p>\n<p>Since Micro Frontends have proven to allow use move fast and agile, we moved this pattern to &quot;trial&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\micro-frontends.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "microservices",
          "release": "2018-03-01",
          "title": "Microservices",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\microservices.md",
          "body": "<p>We continue to belief in the microservices concept and its related patterns and best practices. However, it&#39;s worth mentioning that we we had to learn some lessons when it came to resilient thinking and deployment-related dependencies between microservices.</p>\n<p>We feel that our microservice-based applications are more robust than monolithic ones have been. Thanks to the \nsplit of the overall complexity into multiple services, new employees or team members are becoming productive within days or a few weeks.</p>\n<p>In order to get microservices right and to benefit from the advantages, there is a lot more required.\nThe following &quot;pyramid of need&quot; for microservices shows this:\n<img src=\"/techradar/images/microservices-pyramid.png\" alt=\"microservices pyramid of need\"></p>\n"
        },
        {
          "name": "microservices",
          "release": "2017-03-01",
          "title": "Microservices",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\microservices.md",
          "body": "<p>Microservices as an architecture style is getting very popular recently. At AOE, more and more teams are adding microservices to their existing application architecture or designing applications with microservices.</p>\n<p>We also like the term &quot;self-contained systems&quot; instead of microservices.</p>\n<p>The benefits we see are:</p>\n<ul>\n<li> better handling of complexity compared to adding features in a monolithic approach</li>\n<li> beeing able to use the languages and framework that best fit the purpose of the service</li>\n<li> enabling better parallel work in big teams or multi-team projects</li>\n<li> flexibility in deploying changes to production - by just deploying the changed service</li>\n</ul>\n<p>Related patterns are <a href=\"/techradar/methods-and-patterns/strategic-domain-driven-design.html\">Strategic Domain Driven Design</a> as an approach to wisely cut your architecture according to useful bounded contexts and decide on the relevant communication and &quot;translation&quot; between the services.\nIn case you are looking for a small visualisation tool for your microservice architecture you might find <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/AOEpeople/vistecture/\">vistecture</a> useful.</p>\n<p>Also <a href=\"/techradar/methods-and-patterns/resilience-thinking.html\">Resilience thinking</a> is especially important when designing an application as a suite of microservices.</p>\n"
        }
      ],
      "name": "microservices",
      "title": "Microservices",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>We continue to belief in the microservices concept and its related patterns and best practices. However, it&#39;s worth mentioning that we we had to learn some lessons when it came to resilient thinking and deployment-related dependencies between microservices.</p>\n<p>We feel that our microservice-based applications are more robust than monolithic ones have been. Thanks to the \nsplit of the overall complexity into multiple services, new employees or team members are becoming productive within days or a few weeks.</p>\n<p>In order to get microservices right and to benefit from the advantages, there is a lot more required.\nThe following &quot;pyramid of need&quot; for microservices shows this:\n<img src=\"/techradar/images/microservices-pyramid.png\" alt=\"microservices pyramid of need\"></p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\microservices.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "mlops",
          "release": "2021-01-01",
          "title": "MLOps",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\mlops.md",
          "body": "<p>After spending some time diving into the world of data science and machine learning we&#39;re realizing our existing DevOps best practices aren&#39;t a perfect fit for the specific workflows we&#39;re seeing here. Data science is not only about code but also all about managing large datasets and models. Data is being analyzed, models are being trained in many iterations and then software needs to be deployed that does the actual prediction/inference. And this circle (see: CRISP-DM) will repeat over and over again during the development phase and after the first production release. &quot;<strong>MLOps</strong>&quot; extends the DevOps best practices in order to cover these new scenarios specific to machine learning workflows. \n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://dvc.org/\">DVC</a> helps dealing with large data sets and models by connecting external storage to your Git repositories and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cml.dev/\">CML</a> helps integrating the CI/CD into your GitHub or GitLab workflows. \nSince we&#39;re already using Kubernetes extensively we&#39;re exploring <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.kubeflow.org/\">kubeflow</a> for running the full machine learning workflow on Kubernetes clusters.</p>\n"
        }
      ],
      "name": "mlops",
      "title": "MLOps",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>After spending some time diving into the world of data science and machine learning we&#39;re realizing our existing DevOps best practices aren&#39;t a perfect fit for the specific workflows we&#39;re seeing here. Data science is not only about code but also all about managing large datasets and models. Data is being analyzed, models are being trained in many iterations and then software needs to be deployed that does the actual prediction/inference. And this circle (see: CRISP-DM) will repeat over and over again during the development phase and after the first production release. &quot;<strong>MLOps</strong>&quot; extends the DevOps best practices in order to cover these new scenarios specific to machine learning workflows. \n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://dvc.org/\">DVC</a> helps dealing with large data sets and models by connecting external storage to your Git repositories and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cml.dev/\">CML</a> helps integrating the CI/CD into your GitHub or GitLab workflows. \nSince we&#39;re already using Kubernetes extensively we&#39;re exploring <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.kubeflow.org/\">kubeflow</a> for running the full machine learning workflow on Kubernetes clusters.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\mlops.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "neo4j",
          "release": "2017-03-01",
          "title": "Neo4j",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\neo4j.md",
          "body": "<p>Neo4j is one of the oldest Open Source Graph Databases. It&#39;s one of the rare NoSQL databases that is fully ACID-compliant. We see two main advantages of graph databases:</p>\n<ul>\n<li>for a lot of domains there is a natural way of modeling this in a graph (the Neo4j website says &quot;everything is a graph&quot;),</li>\n<li>and querying relations between nodes is very efficient in a graph database.</li>\n</ul>\n<p>Neo4j database is implemented in Java and can therefore be embedded in your application if you live on the JVM.</p>\n<p>You can also choose to run it in a classic server mode, which then provides you with the possibility to either use its REST API or connect to it via the BOLT Driver, which has native bindings for the most popular languages.</p>\n<p>The cypher query language which comes with Neo4j is a declarative graph query language that allows for expressive and efficient querying and updating of the graph.</p>\n<p>At AOE, we use Neo4j mostly for explorative, interactive work with weakly structured or highly connected data, also we are evaluating this for knowledge-based recommendations in our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.searchperience.de/home.html\">Searchperience</a> product.</p>\n"
        }
      ],
      "name": "neo4j",
      "title": "Neo4j",
      "ring": "assess",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Neo4j is one of the oldest Open Source Graph Databases. It&#39;s one of the rare NoSQL databases that is fully ACID-compliant. We see two main advantages of graph databases:</p>\n<ul>\n<li>for a lot of domains there is a natural way of modeling this in a graph (the Neo4j website says &quot;everything is a graph&quot;),</li>\n<li>and querying relations between nodes is very efficient in a graph database.</li>\n</ul>\n<p>Neo4j database is implemented in Java and can therefore be embedded in your application if you live on the JVM.</p>\n<p>You can also choose to run it in a classic server mode, which then provides you with the possibility to either use its REST API or connect to it via the BOLT Driver, which has native bindings for the most popular languages.</p>\n<p>The cypher query language which comes with Neo4j is a declarative graph query language that allows for expressive and efficient querying and updating of the graph.</p>\n<p>At AOE, we use Neo4j mostly for explorative, interactive work with weakly structured or highly connected data, also we are evaluating this for knowledge-based recommendations in our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.searchperience.de/home.html\">Searchperience</a> product.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\neo4j.md"
    },
    {
      "flag": FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "next-js",
          "release": "2021-01-01",
          "ring": "adopt",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\next-js.md",
          "body": ""
        },
        {
          "name": "next-js",
          "release": "2019-11-01",
          "title": "Next.js",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\next-js.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nextjs.org/\">Next.js</a> is a JavaScript and React based framework which makes use of server side rendering.</p>\n"
        }
      ],
      "name": "next-js",
      "title": "Next.js",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nextjs.org/\">Next.js</a> is a JavaScript and React based framework which makes use of server side rendering.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\next-js.md"
    },
    {
      "flag": FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "node-js",
          "release": "2021-01-01",
          "ring": "adopt",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\node-js.md",
          "body": ""
        },
        {
          "name": "node-js",
          "release": "2017-03-01",
          "title": "node.js",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\node-js.md",
          "body": "<p>Node.js is a no- browser JavaScript execution runtime. Its basis is Google&#39;s V8 engine. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nodejs.org/en/\">Node</a> is event-driven and follows a non-blocking I/O model.</p>\n<p>It’s a good choice for restful APIs, realtime purposes or situations where many concurrent connections are expected, where each connection has a lightweight memory footprint.</p>\n<p>Node allows separation of concerns by using its package manager <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">npm</a>, which is also the largest ecosystem of Open Source libraries (modules).</p>\n<p>Modules are added as dependencies and offer a wide range of functionalities in a range from simple helper functions to mature web frameworks such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://expressjs.com/de/\">express.js</a>.</p>\n<p>Many PaaS providers (AWS, Google Cloud Platform, Azure) support node, including deployment and monitoring services out of the box for scalable stateless applications.</p>\n<p>At AOE, we successfully use node.js-based applications for smaller services or internal tools such dashboards.</p>\n"
        }
      ],
      "name": "node-js",
      "title": "node.js",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Node.js is a no- browser JavaScript execution runtime. Its basis is Google&#39;s V8 engine. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nodejs.org/en/\">Node</a> is event-driven and follows a non-blocking I/O model.</p>\n<p>It’s a good choice for restful APIs, realtime purposes or situations where many concurrent connections are expected, where each connection has a lightweight memory footprint.</p>\n<p>Node allows separation of concerns by using its package manager <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">npm</a>, which is also the largest ecosystem of Open Source libraries (modules).</p>\n<p>Modules are added as dependencies and offer a wide range of functionalities in a range from simple helper functions to mature web frameworks such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://expressjs.com/de/\">express.js</a>.</p>\n<p>Many PaaS providers (AWS, Google Cloud Platform, Azure) support node, including deployment and monitoring services out of the box for scalable stateless applications.</p>\n<p>At AOE, we successfully use node.js-based applications for smaller services or internal tools such dashboards.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\node-js.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "nosql",
          "release": "2019-11-01",
          "title": "NoSQL",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\nosql.md",
          "body": "<p>NoSQL technologies are established solutions that allows for scaling and handling big datasets.\nWe use Technologies like Redis, Elasticsearch and Neo4J but there are many others that are powering the NoSQL space.</p>\n"
        }
      ],
      "name": "nosql",
      "title": "NoSQL",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>NoSQL technologies are established solutions that allows for scaling and handling big datasets.\nWe use Technologies like Redis, Elasticsearch and Neo4J but there are many others that are powering the NoSQL space.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\nosql.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "npm",
          "release": "2017-03-01",
          "title": "NPM",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\npm.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">NPM</a> is one of, if not the most, popular package manager for JavaScript. Because of the big community, you can find nearly every dependency in npm.</p>\n<p>Instead of other package managers such as <a href=\"/techradar/tools/bower.html\">bower</a>, you have to write your packages as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/CommonJS\">modules</a>. This unifies the way you have to use, test and, of course, understand dependencies.</p>\n<p>NPM creates a tree for your dependencies and their nesting dependencies. Because of this, you don&#39;t need to handle version conflicts, since every dependency uses there own version of e.g. <a href=\"/techradar/tools/webpack.html\">webpack</a>.</p>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/cli/shrinkwrap\">shrinkwrap</a> you have a robust tool to lock down and manage the versions of your dependencies - following the <a href=\"/techradar/methods-and-patterns/pin-external-dependencies.html\">Pin (external) dependencies</a> approach.</p>\n<p>For each package you have to classify your dependencies:</p>\n<ul>\n<li>  dependencies are needed for use without the need of pre compiling, e.g. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://lodash.com/\">lodash</a></li>\n<li>  devDependencies are needed for development only, e.g. testing frameworks or pre compiler e.g. <a href=\"/techradar/languages-and-frameworks/babel.html\">babel</a></li>\n<li>  peerDependencies you have to provide for using the package</li>\n</ul>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/misc/scripts\">scripts</a> you get support for the most common build lifecycle steps, e.g. build, start, test ...</p>\n<p>Other useful features:</p>\n<ul>\n<li>  mirror support for your own repository (e.g. <a href=\"/techradar/platforms-and-aoe-services/artifactory.html\">artifactory</a>)</li>\n<li>  can be used for server and client JavaScript development (see <a href=\"/techradar/languages-and-frameworks/node-js.html\">node.js</a> )</li>\n</ul>\n"
        }
      ],
      "name": "npm",
      "title": "NPM",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/\">NPM</a> is one of, if not the most, popular package manager for JavaScript. Because of the big community, you can find nearly every dependency in npm.</p>\n<p>Instead of other package managers such as <a href=\"/techradar/tools/bower.html\">bower</a>, you have to write your packages as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/CommonJS\">modules</a>. This unifies the way you have to use, test and, of course, understand dependencies.</p>\n<p>NPM creates a tree for your dependencies and their nesting dependencies. Because of this, you don&#39;t need to handle version conflicts, since every dependency uses there own version of e.g. <a href=\"/techradar/tools/webpack.html\">webpack</a>.</p>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/cli/shrinkwrap\">shrinkwrap</a> you have a robust tool to lock down and manage the versions of your dependencies - following the <a href=\"/techradar/methods-and-patterns/pin-external-dependencies.html\">Pin (external) dependencies</a> approach.</p>\n<p>For each package you have to classify your dependencies:</p>\n<ul>\n<li>  dependencies are needed for use without the need of pre compiling, e.g. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://lodash.com/\">lodash</a></li>\n<li>  devDependencies are needed for development only, e.g. testing frameworks or pre compiler e.g. <a href=\"/techradar/languages-and-frameworks/babel.html\">babel</a></li>\n<li>  peerDependencies you have to provide for using the package</li>\n</ul>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.npmjs.com/misc/scripts\">scripts</a> you get support for the most common build lifecycle steps, e.g. build, start, test ...</p>\n<p>Other useful features:</p>\n<ul>\n<li>  mirror support for your own repository (e.g. <a href=\"/techradar/platforms-and-aoe-services/artifactory.html\">artifactory</a>)</li>\n<li>  can be used for server and client JavaScript development (see <a href=\"/techradar/languages-and-frameworks/node-js.html\">node.js</a> )</li>\n</ul>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\npm.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "nx",
          "release": "2021-01-01",
          "title": "NX",
          "ring": "assess",
          "quadrant": "tools",
          "featured": true,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\nx.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nx.dev/\">Nx</a> is a suite of powerful, extensible dev tools to help you architect, test, and build at any scale.\nIt is mainly applicable in the environment of React, Angular and Node.js and tries to simplify and streamline the work in a mono repo.</p>\n<p>At AOE, we are currently taking our first steps with NX in a mono repo that is home to both our React and Next.js based frontend and our <a href=\"/techradar/languages-and-frameworks/go-lang.html\">Go</a> / <a href=\"/techradar/languages-and-frameworks/flamingo.html\">Flamingo</a> based backend.</p>\n<p>The integration with the Node.js components (React, Next.js, Cypress) works smoothly and brings the expected benefits such as faster build times through intelligent caching.\nSupport for Go is currently only rudimentary, which is why NX still has to prove itself in this area.</p>\n<p>Especially in the environment of Node.js in combination with the use of a mono repo, NX is worth a look.</p>\n"
        }
      ],
      "name": "nx",
      "title": "NX",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nx.dev/\">Nx</a> is a suite of powerful, extensible dev tools to help you architect, test, and build at any scale.\nIt is mainly applicable in the environment of React, Angular and Node.js and tries to simplify and streamline the work in a mono repo.</p>\n<p>At AOE, we are currently taking our first steps with NX in a mono repo that is home to both our React and Next.js based frontend and our <a href=\"/techradar/languages-and-frameworks/go-lang.html\">Go</a> / <a href=\"/techradar/languages-and-frameworks/flamingo.html\">Flamingo</a> based backend.</p>\n<p>The integration with the Node.js components (React, Next.js, Cypress) works smoothly and brings the expected benefits such as faster build times through intelligent caching.\nSupport for Go is currently only rudimentary, which is why NX still has to prove itself in this area.</p>\n<p>Especially in the environment of Node.js in combination with the use of a mono repo, NX is worth a look.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\nx.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "open-api",
          "release": "2019-11-01",
          "title": "Open API",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\open-api.md",
          "body": "<p>The OpenAPI Specification is becoming a broadly adopted industry standard for describing modern REST APIs. Other initiatives like RAML have <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://blogs.mulesoft.com/dev/api-dev/open-api-raml-better-together/\">joined</a> the OpenAPI Initiative.</p>\n<p>OpenAPI v2 version is basically the former Swagger - and Swagger provides useful tools for OpenAPI like the online editor and viewer <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://editor.swagger.io/\">http://editor.swagger.io/</a>\nWe have also found that this version currently have a good tool support accross languages, so you will find API client and server generation tools for a lot of languages, which makes it quite easy to connect to an API that is described in OpenAPI standard.</p>\n<p><strong>OpenAPI v3</strong></p>\n<p>OpenAPI v3 adds more features to the specification - for example the ability to describe APIs supporting request/callback pattern.</p>\n<p>There is a very good api designer <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.apicur.io/\">https://www.apicur.io/</a> and a good mock generator <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://microcks.github.io/index.html\">http://microcks.github.io/index.html</a></p>\n<p>The general tool support is excellent. See <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://openapi.tools/\">https://openapi.tools/</a></p>\n"
        }
      ],
      "name": "open-api",
      "title": "Open API",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>The OpenAPI Specification is becoming a broadly adopted industry standard for describing modern REST APIs. Other initiatives like RAML have <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://blogs.mulesoft.com/dev/api-dev/open-api-raml-better-together/\">joined</a> the OpenAPI Initiative.</p>\n<p>OpenAPI v2 version is basically the former Swagger - and Swagger provides useful tools for OpenAPI like the online editor and viewer <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://editor.swagger.io/\">http://editor.swagger.io/</a>\nWe have also found that this version currently have a good tool support accross languages, so you will find API client and server generation tools for a lot of languages, which makes it quite easy to connect to an API that is described in OpenAPI standard.</p>\n<p><strong>OpenAPI v3</strong></p>\n<p>OpenAPI v3 adds more features to the specification - for example the ability to describe APIs supporting request/callback pattern.</p>\n<p>There is a very good api designer <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.apicur.io/\">https://www.apicur.io/</a> and a good mock generator <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://microcks.github.io/index.html\">http://microcks.github.io/index.html</a></p>\n<p>The general tool support is excellent. See <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://openapi.tools/\">https://openapi.tools/</a></p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\open-api.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "oro-platform",
          "release": "2017-03-01",
          "title": "Oro Platform",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\oro-platform.md",
          "body": "<p>OroPlatform is a framework built on Symfony 2 with the purpose of providing the features you need in every business application that is not your core business logic. Hence, it serves you with a basic application, providing login and complex security, menus and menu management, history, audit trails, settings management, etc. It comes complete with a design and many widgets to be utilized in own entities. Other Features of OroPlatform are, for example, a WebSocket server-driven user interface, queue-based task runners, REST Interface, as well as messaging- and workflow systems.</p>\n<p>One of the central features is that entities, which are to be managed within the system, can be set up completely by configuring them using the UI. This in itself implies that it puts another abstraction layer upon doctrine and symfony defaults.</p>\n<p>As with every framework or application, the general-purpose goals and abstraction comes with drawbacks: In fact, OroPlatform modifies and extends the common way of doing things in Symfony in several places, which makes the developer&#39;s life hard at times. Also, the UI and package managing are set in such a way that they are hard to extend or replace. The many additional abstraction layers can result in decreased performance.</p>\n<p>On the other hand, OroPlatform gives you a good headstart for prototyping and frees you from rebuilding common requirements - which makes it a relevant choice for business applications with the need to manage several entities in a backend. Also, projects such <a href=\"/techradar/tools/akeneo.html\">Akeneo</a> or OroCRM use OroPlatform with success.</p>\n<p>Since the project is still young, the future development and improvements need to be watched. We classified the Framework as <em><strong>Assess</strong></em>.</p>\n"
        }
      ],
      "name": "oro-platform",
      "title": "Oro Platform",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>OroPlatform is a framework built on Symfony 2 with the purpose of providing the features you need in every business application that is not your core business logic. Hence, it serves you with a basic application, providing login and complex security, menus and menu management, history, audit trails, settings management, etc. It comes complete with a design and many widgets to be utilized in own entities. Other Features of OroPlatform are, for example, a WebSocket server-driven user interface, queue-based task runners, REST Interface, as well as messaging- and workflow systems.</p>\n<p>One of the central features is that entities, which are to be managed within the system, can be set up completely by configuring them using the UI. This in itself implies that it puts another abstraction layer upon doctrine and symfony defaults.</p>\n<p>As with every framework or application, the general-purpose goals and abstraction comes with drawbacks: In fact, OroPlatform modifies and extends the common way of doing things in Symfony in several places, which makes the developer&#39;s life hard at times. Also, the UI and package managing are set in such a way that they are hard to extend or replace. The many additional abstraction layers can result in decreased performance.</p>\n<p>On the other hand, OroPlatform gives you a good headstart for prototyping and frees you from rebuilding common requirements - which makes it a relevant choice for business applications with the need to manage several entities in a backend. Also, projects such <a href=\"/techradar/tools/akeneo.html\">Akeneo</a> or OroCRM use OroPlatform with success.</p>\n<p>Since the project is still young, the future development and improvements need to be watched. We classified the Framework as <em><strong>Assess</strong></em>.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\oro-platform.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "packer",
          "release": "2019-11-01",
          "title": "Packer",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\packer.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.packer.io/intro/getting-started/build-image.html\">Hashicorp Packer</a> is a lightweight tool which automates the creation of any type of machine images (Machine Image As A Code) for multiple platforms. \nPacker is not a replacement of configuration management tools like Ansible. Packer works with tools like ansible to install software while creating images. \nPacker uses a configuration file to create a machine image. It uses the concepts of builders to spin up an instance, run provisioners to configure applications or services. \nOnce setup is done, it shuts the instance down and save new baked machine instance with any needed post-processing. \nPacker only builds images. But once you have them you can deploy your infrastructure quickly and even scale by spawning any number of instances without doing extra configuration. \nAnother benefit is, that machine images can be tested to verify if they are working correctly.\nPacker supports multiple cloud providers like AWS, GCP, Digital Ocean etc.</p>\n<p>Machine images are important for modern deployment pipelines and fast ramp of of new infrastructure. \nWe are using Packer to build so called &quot;Golden images&quot; that are used in our <a href=\"/techradar/methods-and-patterns/infrastructure-as-code.html\">Infrastructure as Code</a> based provisionings.</p>\n"
        }
      ],
      "name": "packer",
      "title": "Packer",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.packer.io/intro/getting-started/build-image.html\">Hashicorp Packer</a> is a lightweight tool which automates the creation of any type of machine images (Machine Image As A Code) for multiple platforms. \nPacker is not a replacement of configuration management tools like Ansible. Packer works with tools like ansible to install software while creating images. \nPacker uses a configuration file to create a machine image. It uses the concepts of builders to spin up an instance, run provisioners to configure applications or services. \nOnce setup is done, it shuts the instance down and save new baked machine instance with any needed post-processing. \nPacker only builds images. But once you have them you can deploy your infrastructure quickly and even scale by spawning any number of instances without doing extra configuration. \nAnother benefit is, that machine images can be tested to verify if they are working correctly.\nPacker supports multiple cloud providers like AWS, GCP, Digital Ocean etc.</p>\n<p>Machine images are important for modern deployment pipelines and fast ramp of of new infrastructure. \nWe are using Packer to build so called &quot;Golden images&quot; that are used in our <a href=\"/techradar/methods-and-patterns/infrastructure-as-code.html\">Infrastructure as Code</a> based provisionings.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\packer.md"
    },
    {
      "flag": FlagType.changed,
      "featured": false,
      "revisions": [
        {
          "name": "pact",
          "release": "2021-01-01",
          "title": "PACT",
          "ring": "trial",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\pact.md",
          "body": "<p>At AOE we continue to use PACT but would like to use it even more. It therefore remains in the trail ring but was faded out from the overview page.</p>\n"
        },
        {
          "name": "pact",
          "release": "2018-03-01",
          "title": "PACT",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\pact.md",
          "body": "<p>PACT (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://pact.io/\">http://pact.io/</a>) is a family of frameworks that provides support for <em>Consumer Driven Contract testing</em> accross different langauages and frameworks.</p>\n<p>Consumer Driven Contract testing is a pattern for testing interfaces/boundaries between services.</p>\n<p>It allows &quot;consumers&quot; to run tests against a defined Mock and record the defined interactions (=PACT).\nIt puts &quot;providers&quot; in the position to run the PACT tests inside theire Continuous Integration Pipelines, so that the provider knows if he might break any consumers.</p>\n<p>This approach makes sense in organisations where teams collaborate more closely (See <a href=\"/techradar/methods-and-patterns/strategic-domain-driven-design.html\">Strategic Domain Driven Design</a> ), e.g. to build <a href=\"/techradar/methods-and-patterns/microservices.html\">Microservice oriented architectures</a></p>\n<p>Consumer Driven Contract Testing and how it can be conducted with PACT is documented very nicely on the official PACT website: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.pact.io/\">https://docs.pact.io/</a>.</p>\n"
        }
      ],
      "name": "pact",
      "title": "PACT",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>At AOE we continue to use PACT but would like to use it even more. It therefore remains in the trail ring but was faded out from the overview page.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\pact.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "pair-working",
          "release": "2017-03-01",
          "title": "Pair working",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\pair-working.md",
          "body": "<p>We summarized the practices of pair programming and administrating as pair working.</p>\n<p>Derived as a practice from eXtreme Programming (XP), pair programming is a method/pattern that aims for fine-scaled feedback within a team.</p>\n<p>At AOE, some developers and operators work in pairs, not constantly, but from time to time. Most teams have positive experiences using this method, but not all teams tried the by-the-book-approach (driver and navigator principle). Especially for non-trival tasks, pair working results in rapid knowlegde exchange and better results with less bugs. We encourage the teams to try this approach more often.</p>\n"
        }
      ],
      "name": "pair-working",
      "title": "Pair working",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>We summarized the practices of pair programming and administrating as pair working.</p>\n<p>Derived as a practice from eXtreme Programming (XP), pair programming is a method/pattern that aims for fine-scaled feedback within a team.</p>\n<p>At AOE, some developers and operators work in pairs, not constantly, but from time to time. Most teams have positive experiences using this method, but not all teams tried the by-the-book-approach (driver and navigator principle). Especially for non-trival tasks, pair working results in rapid knowlegde exchange and better results with less bugs. We encourage the teams to try this approach more often.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\pair-working.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "phan",
          "release": "2017-03-01",
          "title": "phan",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\phan.md",
          "body": "<p>Phan is a static code analyzer for PHP7, which is very fast, since it uses the PHP 7 AST (abstract syntax tree). Phan basically offers some of the safety that otherwise only compiled type-safe languages have - such as checking function references and return types.</p>\n<p>We expect at least the following benefits:</p>\n<ul>\n<li>  Decreased bug density; possible bugs and issues are found early</li>\n<li>  Safer code and higher code quality</li>\n</ul>\n<p>We think Phan can be used in the deployment pipeline or as commit hooks for PHP 7-based applications. For a full Feature list check <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/etsy/phan#features\">here</a>.</p>\n"
        }
      ],
      "name": "phan",
      "title": "phan",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p>Phan is a static code analyzer for PHP7, which is very fast, since it uses the PHP 7 AST (abstract syntax tree). Phan basically offers some of the safety that otherwise only compiled type-safe languages have - such as checking function references and return types.</p>\n<p>We expect at least the following benefits:</p>\n<ul>\n<li>  Decreased bug density; possible bugs and issues are found early</li>\n<li>  Safer code and higher code quality</li>\n</ul>\n<p>We think Phan can be used in the deployment pipeline or as commit hooks for PHP 7-based applications. For a full Feature list check <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/etsy/phan#features\">here</a>.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\phan.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "php7-over-php5",
          "release": "2017-03-01",
          "title": "PHP7 over PHP5",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\php7-over-php5.md",
          "body": "<p>PHP 5 has been around for a very long time, and can be considered as the PHP version that defined where PHP wants to go in the future.\nWith proper OOP, support for clojures and a steadily improving type system, it has become a very mature language.\nHowever, in the past 3 years, Facebook introduced HHVM, which became a major influence on PHP 7 and eventually brought a lot of improvements not only for the execution speed, but also with proper type hints and other features.</p>\n<p>Here at AOE, we have numerous PHP projects, and we often kept it backwards-compatible to make sure that it will run on older systems. This is comparable to the procedure most frameworks (Magento, OroPlatform and derived projects) use.</p>\n<p>Now, PHP 5 has reached its end--of-life, and it is time to discontinue the backqards-compatibility in favor of better and more stable applications.\nEven though we can use the PHP 7 runtime while being PHP 5-compatible, it is not considered good practice anymore, as we can now rely on the PHP 7 features and use all of its advantages.</p>\n<p>One of the major points PHP 7 supports is proper typehinting and return types (apart from PhpDocs), which makes <a href=\"/techradar/tools/phan.html\">static analysis</a> much easier and can improve the overall code quality significantly.</p>\n"
        }
      ],
      "name": "php7-over-php5",
      "title": "PHP7 over PHP5",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>PHP 5 has been around for a very long time, and can be considered as the PHP version that defined where PHP wants to go in the future.\nWith proper OOP, support for clojures and a steadily improving type system, it has become a very mature language.\nHowever, in the past 3 years, Facebook introduced HHVM, which became a major influence on PHP 7 and eventually brought a lot of improvements not only for the execution speed, but also with proper type hints and other features.</p>\n<p>Here at AOE, we have numerous PHP projects, and we often kept it backwards-compatible to make sure that it will run on older systems. This is comparable to the procedure most frameworks (Magento, OroPlatform and derived projects) use.</p>\n<p>Now, PHP 5 has reached its end--of-life, and it is time to discontinue the backqards-compatibility in favor of better and more stable applications.\nEven though we can use the PHP 7 runtime while being PHP 5-compatible, it is not considered good practice anymore, as we can now rely on the PHP 7 features and use all of its advantages.</p>\n<p>One of the major points PHP 7 supports is proper typehinting and return types (apart from PhpDocs), which makes <a href=\"/techradar/tools/phan.html\">static analysis</a> much easier and can improve the overall code quality significantly.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\php7-over-php5.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "pin-external-dependencies",
          "release": "2017-03-01",
          "title": "Pin external dependencies",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\pin-external-dependencies.md",
          "body": "<p>A lot of applications have dependencies on other modules or components. We have\nused different approaches regarding how and when these dependencies are resolved\nand have agreed on using a method we call &quot;Pin (External) dependencies&quot;.</p>\n<p>This is especially relevant for script languages, where the dependency\nmanagement references the code and not immutable prebuild binaries - and\ntherefore resolves the complete transient dependencies on the fly.</p>\n<p>Most of these package- or dependency management solutions support two artefacts:</p>\n<ul>\n<li>a semantic dependency definition. This defines the compatible versions of the\nrequired dependencies. (Composer: composer.json / NPM: package.json)</li>\n<li>a lock file defining the exact revisions of the dependencies and the transient\ndependencies (dependencies of dependencies). This is created after running the\ntool. (Composer: composer.lock / NPM: npm-shrinkwrap.json / yarn: yarn.lock).</li>\n</ul>\n<p>We suggest the following:</p>\n<ul>\n<li>Keep the dependency definition AND the lock file in version control. This\nensures that chained dependencies are also locked and you have changes of that\nfile visible in your version control commit history. This helps finding issues\nor bugs that might relate to unintended updates in external modules or\ntransient dependencies.</li>\n<li>Build Step: The application build step should use the the pinned versions\n(with the help of the lock file) to ensure that the same revisions of the\ndependent packages are used.</li>\n<li>It&#39;s also suggested to use local or central caches for the retrieval of\npackages. (E.g.\n<a href=\"/techradar/platforms-and-aoe-services/artifactory.html\">artifactory as composer and npm cache</a>)</li>\n</ul>\n<p>For updating of dependencies define a process in the team. This can either be\ndone on the dev-system or in a seperate automated CI job - both resulting in\nupdated dependency definitions in the applications VCS.</p>\n"
        }
      ],
      "name": "pin-external-dependencies",
      "title": "Pin external dependencies",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>A lot of applications have dependencies on other modules or components. We have\nused different approaches regarding how and when these dependencies are resolved\nand have agreed on using a method we call &quot;Pin (External) dependencies&quot;.</p>\n<p>This is especially relevant for script languages, where the dependency\nmanagement references the code and not immutable prebuild binaries - and\ntherefore resolves the complete transient dependencies on the fly.</p>\n<p>Most of these package- or dependency management solutions support two artefacts:</p>\n<ul>\n<li>a semantic dependency definition. This defines the compatible versions of the\nrequired dependencies. (Composer: composer.json / NPM: package.json)</li>\n<li>a lock file defining the exact revisions of the dependencies and the transient\ndependencies (dependencies of dependencies). This is created after running the\ntool. (Composer: composer.lock / NPM: npm-shrinkwrap.json / yarn: yarn.lock).</li>\n</ul>\n<p>We suggest the following:</p>\n<ul>\n<li>Keep the dependency definition AND the lock file in version control. This\nensures that chained dependencies are also locked and you have changes of that\nfile visible in your version control commit history. This helps finding issues\nor bugs that might relate to unintended updates in external modules or\ntransient dependencies.</li>\n<li>Build Step: The application build step should use the the pinned versions\n(with the help of the lock file) to ensure that the same revisions of the\ndependent packages are used.</li>\n<li>It&#39;s also suggested to use local or central caches for the retrieval of\npackages. (E.g.\n<a href=\"/techradar/platforms-and-aoe-services/artifactory.html\">artifactory as composer and npm cache</a>)</li>\n</ul>\n<p>For updating of dependencies define a process in the team. This can either be\ndone on the dev-system or in a seperate automated CI job - both resulting in\nupdated dependency definitions in the applications VCS.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\pin-external-dependencies.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "pipeline-as-code",
          "release": "2018-03-01",
          "title": "Pipeline as Code",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\pipeline-as-code.md",
          "body": "<p>We moved this pattern to <strong>adopt</strong>, because it is used by nearly every team and project now and is an important part of our automation.</p>\n<p>For Jenkins, we often use a mix of Job DSL and Jenkins Pipelines and recently also used Gitlab Pipelines.</p>\n"
        },
        {
          "name": "pipeline-as-code",
          "release": "2017-03-01",
          "title": "Pipeline as Code",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\pipeline-as-code.md",
          "body": "<p>Continuous Integration and Delivery is a critical part of our development and deployment process at AOE. Using Jenkins for many years the &quot;instructions&quot; how to build, test and deploy applications were scattered between many custom scripts and the pipeline was often maintained by manual maintenance of Jenkins jobs. Soon, we realized that we need a more native way to express the full CI/CD pipeline process in code and manage it in version control.</p>\n<p>Being an important part of each project, the pipeline configuration should be managed as code and rolled out automatically - this also allows us to manage the pipeline itself applying the same standards that apply to application code.</p>\n<p>While some teams started using Jenkins&#39; <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin\">JobDSL plugin,</a> others explored the new <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://jenkins.io/doc/book/pipeline/\">Jenkins Pipeline</a> - in both ways, the build artifacts should be published to an artifact repository such as <a href=\"/techradar/platforms-and-aoe-services/artifactory.html\">Artifactory.</a></p>\n"
        }
      ],
      "name": "pipeline-as-code",
      "title": "Pipeline as Code",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>We moved this pattern to <strong>adopt</strong>, because it is used by nearly every team and project now and is an important part of our automation.</p>\n<p>For Jenkins, we often use a mix of Job DSL and Jenkins Pipelines and recently also used Gitlab Pipelines.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\pipeline-as-code.md"
    },
    {
      "flag": FlagType.changed,
      "featured": false,
      "revisions": [
        {
          "name": "plant-uml",
          "release": "2021-01-01",
          "title": "Plant UML",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\plant-uml.md",
          "body": ""
        },
        {
          "name": "plant-uml",
          "release": "2019-11-01",
          "title": "Plant UML",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\plant-uml.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://plantuml.com/\">PlantUML</a> is an open source project that allows to create UML diagrams in a text-based and declarative way.</p>\n<p>Since it is integrated in tools like Confluence, IntelliJ and Gitlab we use it a lot to quickly document results of software design sessions.</p>\n<p>Another similar tools that use just plain javascript to render the diagrams is <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://mermaid-js.github.io/mermaid/#/\">mermaid</a></p>\n"
        }
      ],
      "name": "plant-uml",
      "title": "Plant UML",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://plantuml.com/\">PlantUML</a> is an open source project that allows to create UML diagrams in a text-based and declarative way.</p>\n<p>Since it is integrated in tools like Confluence, IntelliJ and Gitlab we use it a lot to quickly document results of software design sessions.</p>\n<p>Another similar tools that use just plain javascript to render the diagrams is <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://mermaid-js.github.io/mermaid/#/\">mermaid</a></p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\plant-uml.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "play-framework",
          "release": "2017-03-01",
          "title": "Play Framework",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\play-framework.md",
          "body": "<p>The Play Framework is a lightweight (web)application framework for Java and <a href=\"/techradar/languages-and-frameworks/scala-lang.html\">Scala</a> programmers.</p>\n<p>A developer can choose from different modules to include necessary functionality such s accessing http resources, databases, and so on. As a consequence, the developer can choose, and is not distracted by or clobbered with irrelevant things. This approach is considered as minimalistic, but it is easy to include necessary functionality.</p>\n<p>Regarding the architecture, Play is stateless and built on Akka. As a consequence, Play applications have much lower resource consumption regarding CPU und memory and can scale easily. Play manages concurrency without binding a request to a thread until the response is ready.</p>\n<p>With the use of &quot;<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://docs.scala-lang.org/overviews/core/futures.html\">Futures</a>&quot; in your code you can turn synchronous tasks (such as IO or API call to another service) into asynchronous and you can build non-blocking applications. It is recommended to understand the principles Play uses to achieve performance and scalability.</p>\n<p>Play can act as backend service delivering JSON, for esample. For building web applications. the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.playframework.com/documentation/2.5.x/ScalaTemplates\">Twirl</a> template engine enables server-side rendering of html pages. These html pages can include css and java script parts of your own choice.</p>\n"
        }
      ],
      "name": "play-framework",
      "title": "Play Framework",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>The Play Framework is a lightweight (web)application framework for Java and <a href=\"/techradar/languages-and-frameworks/scala-lang.html\">Scala</a> programmers.</p>\n<p>A developer can choose from different modules to include necessary functionality such s accessing http resources, databases, and so on. As a consequence, the developer can choose, and is not distracted by or clobbered with irrelevant things. This approach is considered as minimalistic, but it is easy to include necessary functionality.</p>\n<p>Regarding the architecture, Play is stateless and built on Akka. As a consequence, Play applications have much lower resource consumption regarding CPU und memory and can scale easily. Play manages concurrency without binding a request to a thread until the response is ready.</p>\n<p>With the use of &quot;<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://docs.scala-lang.org/overviews/core/futures.html\">Futures</a>&quot; in your code you can turn synchronous tasks (such as IO or API call to another service) into asynchronous and you can build non-blocking applications. It is recommended to understand the principles Play uses to achieve performance and scalability.</p>\n<p>Play can act as backend service delivering JSON, for esample. For building web applications. the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.playframework.com/documentation/2.5.x/ScalaTemplates\">Twirl</a> template engine enables server-side rendering of html pages. These html pages can include css and java script parts of your own choice.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\play-framework.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "ports-and-adapters",
          "release": "2019-11-01",
          "title": "Ports and Adapters",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\ports-and-adapters.md",
          "body": "<p>Updated to &quot;adopt&quot;</p>\n"
        },
        {
          "name": "ports-and-adapters",
          "release": "2018-03-01",
          "title": "Ports and Adapters",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\ports-and-adapters.md",
          "body": "<p>Ports and Adapters is an architecture or layering approach for software design. As with other layering approaches, it seperates different concerns in different layers, where dependencies are only allowed from the outside to the inside.</p>\n<p>We use &quot;ports and adapters&quot; with success for (larger) applications, which contain certain business logic and/or provide several ways to access the services.\nWe often use the approach hand-in-hand with Domain Driven Design. In comparison with other layering patterns (e.g. layered architecture) it allows you to have a true technology-free core (domain) model. Why? Because, with the concept of &quot;secondary ports&quot; (=interfaces), it inverts the control and allows outer layers to provide adapters (=implementations of the defined interface).\nIt also defines clear boundaries regarding where to put what logic of your application.</p>\n<p>You can find out more about the details and its origins in well-known blog posts such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html\">The Clean Architecture</a> or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://alistair.cockburn.us/Hexagonal+architecture\">Hexagonal architecture</a></p>\n<p>In short, here is how we often layer such applications:</p>\n<ul>\n<li>Domain:<ul>\n<li>Is the inner layer and contains the technology-free domain model</li>\n<li>Often uses building blocks from Domain Driven Design</li>\n<li>It defines primary and secondary ports. (E.g. a secondary port is in &quot;interface&quot; that needs to be implemented in the infrastructure layer.)</li>\n</ul>\n</li>\n<li>Application:<ul>\n<li>Contains the Application&#39;s API and Services, that are developed around the use cases in the application requirements.</li>\n<li>These use cases orchestrate the flow of data to and from the domain</li>\n</ul>\n</li>\n<li>Interfaces:<ul>\n<li>Contain everything required to convert data from the format most-convenient for the use cases (e.g. in the application layer) to the format required for external agency/access</li>\n<li>e.g. (Web) Controllers / DTOs for handling forms, etc.</li>\n</ul>\n</li>\n<li>Infrastructure:<ul>\n<li>This layer is where all the (technical) details live. (The database and persistence is a detail, the communication format and mappings with external services is a detail, etc.)</li>\n<li>In this layer you typically have adapters for the secondary ports that have been defined in the layers below. (e.g. an Implementation of a Repository interface from the Domain layer)</li>\n</ul>\n</li>\n</ul>\n<p>These layers belong to every bounded context (modules) inside the application.</p>\n<p>Are you searching for a potential timeless architecture for your critical application? Try implementing a potent technology-free domain model in the core layer and use ports and adapters to layer your application.</p>\n"
        }
      ],
      "name": "ports-and-adapters",
      "title": "Ports and Adapters",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Updated to &quot;adopt&quot;</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\ports-and-adapters.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "postcss",
          "release": "2017-03-01",
          "title": "PostCSS",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\postcss.md",
          "body": "<p>PostCSS is a tool for transforming stylesheets with JavaScript plugins. It comes with a parser that reads your CSS file into an AST, pipes it through the loaded plugins and finally\nstringifies it back into a (transformed) CSS output file.</p>\n<p>We at AOE love PostCSS because it gives us the power to use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/css-modules/css-modules\">CSS Modules</a>, which finally ends the curse of global CSS.</p>\n<p>It also has a huge list of more than 350 other <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://postcss.parts/\">available plugins</a>.\nSure, not all of them are useful, but the sheer number of plugins shows how easy it is to write your own plugin for it.\nIn fact, it´s just a matter of writing a single JS function.</p>\n<p>Finally, PostCSS is very fast and easy to setup because it runs 100% in JavaScript.\nCompared to <a href=\"/techradar/languages-and-frameworks/sass.html\">SASS</a> as a preprocessor, it feels much more powerful but at the same time less bloated with superfluous functionality because everything comes in its own little plugin</p>\n"
        }
      ],
      "name": "postcss",
      "title": "PostCSS",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>PostCSS is a tool for transforming stylesheets with JavaScript plugins. It comes with a parser that reads your CSS file into an AST, pipes it through the loaded plugins and finally\nstringifies it back into a (transformed) CSS output file.</p>\n<p>We at AOE love PostCSS because it gives us the power to use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/css-modules/css-modules\">CSS Modules</a>, which finally ends the curse of global CSS.</p>\n<p>It also has a huge list of more than 350 other <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://postcss.parts/\">available plugins</a>.\nSure, not all of them are useful, but the sheer number of plugins shows how easy it is to write your own plugin for it.\nIn fact, it´s just a matter of writing a single JS function.</p>\n<p>Finally, PostCSS is very fast and easy to setup because it runs 100% in JavaScript.\nCompared to <a href=\"/techradar/languages-and-frameworks/sass.html\">SASS</a> as a preprocessor, it feels much more powerful but at the same time less bloated with superfluous functionality because everything comes in its own little plugin</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\postcss.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "postgres",
          "release": "2019-11-01",
          "title": "PostgreSQL",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\postgres.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.postgresql.org/\">PostgreSQL</a> is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.</p>\n"
        }
      ],
      "name": "postgres",
      "title": "PostgreSQL",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.postgresql.org/\">PostgreSQL</a> is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\postgres.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "postman",
          "release": "2019-11-01",
          "title": "Postman",
          "ring": "trial",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\postman.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.getpostman.com/\">Postman</a> is an API testing and documentation tool. Requests can be bundled into folders \nand easily be configured to be executed against multiple environments. Responses can be evaluated using the &quot;test&quot; feature.</p>\n<p>Even automated testing is possible using <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/package/newman\">Newman</a> as an addition to Postman.</p>\n"
        }
      ],
      "name": "postman",
      "title": "Postman",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.getpostman.com/\">Postman</a> is an API testing and documentation tool. Requests can be bundled into folders \nand easily be configured to be executed against multiple environments. Responses can be evaluated using the &quot;test&quot; feature.</p>\n<p>Even automated testing is possible using <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/package/newman\">Newman</a> as an addition to Postman.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\postman.md"
    },
    {
      "flag":FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "prometheus",
          "release": "2021-01-01",
          "title": "Prometheus",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\prometheus.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://prometheus.io\">Prometheus</a> is an open-source monitoring and alerting system. It was the second project within the CNCF which reached the &quot;graduated&quot; status and has since seen a large rate of adoption accross many CNCF projects. It primarily utilizes a pull-based metrics flow through HTTP which allows the easy integration of a variety of application-specific metrics sources. Compared to other monitoring systems it stands out in it&#39;s simple, still powerful and fully code-based configuration and the equally powerful service discovery mechanism.</p>\n<p>Prometheus integrates very well with Grafana which is our tool of choice for dashboard visualization. Through the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/prometheus-operator/prometheus-operator\">Prometheus Operator</a> project, the monitoring system can be configured through Kubernetes custom resource definitions. These can be shipped by development teams alongside with their application deployments and allow <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/methods-and-patterns/shared-responsibility.html\">sharing responsibility</a> for monitoring tasks between operations and engineerings teams with a clear interface.</p>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cortexmetrics.io/\">Cortex</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://thanos.io/\">Thanos</a> the Prometheus-ecosystem knows two well setteled solutions for high-availibilty of the underlying time series database and with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/en/prometheus/\">Amazon Managed Services for Prometheus</a> there&#39;s also a SaaS-Solution available.</p>\n<p>We use Prometheus in nearly every project, it&#39;s an essential part of our underlying operations and also well understood by many development teams.</p>\n"
        }
      ],
      "name": "prometheus",
      "title": "Prometheus",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://prometheus.io\">Prometheus</a> is an open-source monitoring and alerting system. It was the second project within the CNCF which reached the &quot;graduated&quot; status and has since seen a large rate of adoption accross many CNCF projects. It primarily utilizes a pull-based metrics flow through HTTP which allows the easy integration of a variety of application-specific metrics sources. Compared to other monitoring systems it stands out in it&#39;s simple, still powerful and fully code-based configuration and the equally powerful service discovery mechanism.</p>\n<p>Prometheus integrates very well with Grafana which is our tool of choice for dashboard visualization. Through the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/prometheus-operator/prometheus-operator\">Prometheus Operator</a> project, the monitoring system can be configured through Kubernetes custom resource definitions. These can be shipped by development teams alongside with their application deployments and allow <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.aoe.com/techradar/methods-and-patterns/shared-responsibility.html\">sharing responsibility</a> for monitoring tasks between operations and engineerings teams with a clear interface.</p>\n<p>With <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://cortexmetrics.io/\">Cortex</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://thanos.io/\">Thanos</a> the Prometheus-ecosystem knows two well setteled solutions for high-availibilty of the underlying time series database and with <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/en/prometheus/\">Amazon Managed Services for Prometheus</a> there&#39;s also a SaaS-Solution available.</p>\n<p>We use Prometheus in nearly every project, it&#39;s an essential part of our underlying operations and also well understood by many development teams.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\prometheus.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "protobuf",
          "release": "2017-03-01",
          "title": "Protobuf",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\protobuf.md",
          "body": "<p>In an increasingly microservice-oriented environment, it is crucial that all parties agree on a common language and wire format for data exchange.</p>\n<p>JSON and XML are two well-known formats for serialization of data; however, they come with a few drawbacks. JSON is completely dynamic without any validation (though there is json-schema) and XML uses an extremely heavyweight syntax, which carries a huge overhead, so parsing and transport becomes quite slow.</p>\n<p>Protobuf, amongst others, is an approach to solving this problem by using well-defined schemas to create language-specific code, which serializes/marshals and deserializes/unmarshals data. One of the key features is the built-in support for evolving schemas; it is easily possible to incrementally extend the definition while staying backwards-compatible and compose messages consisting of several sub-messages.</p>\n<p>If you are looking for a way to have different systems agree on a common protocol on top of a transport layer (such as AMQP or HTTP), Protobuf is definitely worth examining more closely and should be assessed.</p>\n"
        }
      ],
      "name": "protobuf",
      "title": "Protobuf",
      "ring": "assess",
      "quadrant": "languages-and-frameworks",
      "body": "<p>In an increasingly microservice-oriented environment, it is crucial that all parties agree on a common language and wire format for data exchange.</p>\n<p>JSON and XML are two well-known formats for serialization of data; however, they come with a few drawbacks. JSON is completely dynamic without any validation (though there is json-schema) and XML uses an extremely heavyweight syntax, which carries a huge overhead, so parsing and transport becomes quite slow.</p>\n<p>Protobuf, amongst others, is an approach to solving this problem by using well-defined schemas to create language-specific code, which serializes/marshals and deserializes/unmarshals data. One of the key features is the built-in support for evolving schemas; it is easily possible to incrementally extend the definition while staying backwards-compatible and compose messages consisting of several sub-messages.</p>\n<p>If you are looking for a way to have different systems agree on a common protocol on top of a transport layer (such as AMQP or HTTP), Protobuf is definitely worth examining more closely and should be assessed.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\protobuf.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "puppet-environments",
          "release": "2018-03-01",
          "title": "Puppet Environments",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\puppet-environments.md",
          "body": "<p>Puppet Environments has proven to work well for our projects using Puppet.</p>\n"
        },
        {
          "name": "puppet-environments",
          "release": "2017-03-01",
          "title": "Puppet Environments",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\puppet-environments.md",
          "body": "<h2 id=\"puppet\">Puppet</h2>\n<p>Puppet is an Open Source configuration management tool. It is used by a wide range of different companies world-wide, e.g. the Wikimedia Foundation, Mozilla, Reddit, CERN, Dell, Rackspace, Twitter, the New York Stock Exchange, PayPal, Disney, Citrix Systems, Spotify, Oracle, the University of California Los Angeles, the University of North Texas, QVC, Intel, Google and others.</p>\n<p>Puppet has been the basic tool to address Continuous Configuration Automation (CCA) in AOE&#39;s <a href=\"/techradar/methods-and-patterns/infrastructure-as-code.html\">Infrastructure as Code</a> strategy (IaC) for more than 4 years.</p>\n<h2 id=\"puppet-environments\">Puppet Environments</h2>\n<p>Intended to give projects the means to develop and maintain their own infrastructure, separated and not influenced by other projects, Puppet environments, together with Puppet module versioning and ENC, have been introduced.<br>Puppet Environments are rated &quot;Trial&quot;. It supports our strategy of Infrastructure as Code (IaC) and links it to our DevOps approach, enabling project teams to set up and customize their own infrastructure.</p>\n<p>Teams that want to use the Puppet Environments service from the AOE IT Team will find detailed information about the implemented CI/CD process for this.</p>\n"
        }
      ],
      "name": "puppet-environments",
      "title": "Puppet Environments",
      "ring": "trial",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Puppet Environments has proven to work well for our projects using Puppet.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\puppet-environments.md"
    },
    {
      "flag":FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "python-for-infrastructure",
          "release": "2021-01-01",
          "title": "Python for Infrastructure Glue Code",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\python-for-infrastructure.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.python.org\">Python</a> is an easy to learn programming language that is pre-installed on\nmost Linux distributions and CI runners.\nThis makes it an ideal candidate for infrastructure glue code and adapters.</p>\n<p>Shell scripts serve the same purpose. But they usually start simple and get more complex over time.\nThis is the point where Python&#39;s features like testing capabilities, modularity, variable scoping and refactoring\nsupport comes in strong. We found that Python scripts are easier maintained in the long run and pose\na lower barrier for contributions by our development teams. And they run across platforms and shells\nwithout much trouble which is a big plus for developers running different operating systems.</p>\n<p>The Python language has a wide eco-system and a vast module library that can simplify scripting\nsignificantly. We currently value <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pypi.org/project/requests/\">requests</a> for HTTP API calls\nand <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://click.palletsprojects.com/en/7.x/\">Click</a> for simple interactive CLI scripts, along with\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.pytest.org/\">pytest</a> for automated testing.</p>\n"
        }
      ],
      "name": "python-for-infrastructure",
      "title": "Python for Infrastructure Glue Code",
      "ring": "assess",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.python.org\">Python</a> is an easy to learn programming language that is pre-installed on\nmost Linux distributions and CI runners.\nThis makes it an ideal candidate for infrastructure glue code and adapters.</p>\n<p>Shell scripts serve the same purpose. But they usually start simple and get more complex over time.\nThis is the point where Python&#39;s features like testing capabilities, modularity, variable scoping and refactoring\nsupport comes in strong. We found that Python scripts are easier maintained in the long run and pose\na lower barrier for contributions by our development teams. And they run across platforms and shells\nwithout much trouble which is a big plus for developers running different operating systems.</p>\n<p>The Python language has a wide eco-system and a vast module library that can simplify scripting\nsignificantly. We currently value <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pypi.org/project/requests/\">requests</a> for HTTP API calls\nand <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://click.palletsprojects.com/en/7.x/\">Click</a> for simple interactive CLI scripts, along with\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.pytest.org/\">pytest</a> for automated testing.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\python-for-infrastructure.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "rabbitmq",
          "release": "2019-11-01",
          "title": "RabbitMQ",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\rabbitmq.md",
          "body": "<p>RabbitMQ has proven to work very well for messaging in our projects, thats why we updated it to &quot;adopt&quot;. </p>\n"
        },
        {
          "name": "rabbitmq",
          "release": "2017-03-01",
          "title": "RabbitMQ",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rabbitmq.md",
          "body": "<p>RabbitMQ is an Open Source message broker - implementing the Advanced Message Queuing Protocol (AMQP) protocol. It provides a reliable and scalable way to transport data between loosely coupled applications, using different EAI patterns such as the Publish &amp; Subscriber pattern. AMQP supports direct and fan-out exchanges (broadcasts) as well as topics. Queuing mechanisms allow for robust architectures, mitigating the risks of application downtimes. Typically, a RabbitMQ server can easily buffer millions of messages. RabbitMQ supports JMS in addition to AMQP. It is not intended to use JMS for new systems, but it makes RabbitMQ useful for integrating legacy systems.</p>\n<p>There are several alternative solutions to RabbitMQ, e. g. the free Apache ActiveMQ, which is integrated in <a href=\"/techradar/tools/anypoint-platform.html\">Anypoint platform</a>. ActiveMQ implements a somewhat simpler routing concept than RabbitMQ, but offers more protocols. Commercial products in this area are offered by IBM (Websphere MQ), Fiorano and almost every vendor of ESB products.</p>\n<p>We use RabbitMQ internally for transferring messages safely in our logging ecosystem between <a href=\"/techradar/platforms-and-aoe-services/elk-stack.html\">Logstash</a> proxies and servers using direct and fan-out exchanges for delivering messages to appropriate destinations. RabbitMQ is also used to asynchronously trigger Jenkins jobs from our SCMs to mitigate heavy load on the SCMs, usually caused by Jenkins polls for SCM changes. Additionally, some critical events for monitoring are using RabbitMQ for guaranteed notification. </p>\n<p>RabbitMQ is rated &quot;Trial&quot;. It fits into our approach to build robust, <a href=\"/techradar/methods-and-patterns/resilience-thinking.html\">resilient systems</a> and use <a href=\"/techradar/methods-and-patterns/decoupling-infrastructure-via-messaging.html\">asyncronous messages</a> for loosely coupled communications between components. In practice, RabbitMQ proved to be stable and dealt well with service interruptions from failures and maintenance slots. A common pain point is RabbitMQ as a single point of failure disrupting the data flow in a system. This issue is currently approached by setting up a HA cluster for RabbitMQ. The outcome of this approach will clarify the extent of future usage of RabbitMQ in our systems.</p>\n"
        }
      ],
      "name": "rabbitmq",
      "title": "RabbitMQ",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>RabbitMQ has proven to work very well for messaging in our projects, thats why we updated it to &quot;adopt&quot;. </p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\rabbitmq.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "raml",
          "release": "2019-11-01",
          "title": "RAML",
          "ring": "hold",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\raml.md",
          "body": "<p>Since the RAML project has decided to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://blogs.mulesoft.com/dev/api-dev/open-api-raml-better-together/\">join</a> the OpenAPI initiative and the RAML ecosystem lacks further development and additional tools, we decided to  use and recommend using <a href=\"/techradar/tools/open-api.html\">&quot;OpenAPI specififcation (OAS)&quot;</a> as description standard instead.</p>\n<p>RAML still provides advantages in modeling an API through it&#39;s more expressive modeling language and can produce OAS</p>\n"
        },
        {
          "name": "raml",
          "release": "2017-03-01",
          "title": "RAML",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\raml.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://raml.org/\">RAML</a> (the RESTful API Modelling Language) is a YAML-based API specification language. It&#39;s now available in <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md#defining-types\">version 1.0</a>. The philosophy behind it is to <a href=\"/techradar/methods-and-patterns/api-first-design-approach.html\">specify the API before implementation</a>.</p>\n<p>If you follow this philosophy, you can design your API and discuss it with your clients and team before implementing a single line of code. API consumers are able to implement against the API before it&#39;s really up and running. The <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/mulesoft/api-console\">api-console</a> provides a beautiful online documentation with &quot;try it&quot; features for your raml definition.</p>\n<p>The RAML ecosystem provides a rich toolset for code generation (e.g. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://rawgit.com/mulesoft/api-designer/master/dist/index.html#/?xDisableProxy=true\">online editor</a>;<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://apiworkbench.com/\"> api-workbench</a>), automatically generated documentation, code generation (e.g. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/Jumpscale/go-raml\">go-raml</a>), mocking, testing and much more. We prefer RAML over Swagger because of this.</p>\n"
        }
      ],
      "name": "raml",
      "title": "RAML",
      "ring": "hold",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Since the RAML project has decided to <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://blogs.mulesoft.com/dev/api-dev/open-api-raml-better-together/\">join</a> the OpenAPI initiative and the RAML ecosystem lacks further development and additional tools, we decided to  use and recommend using <a href=\"/techradar/tools/open-api.html\">&quot;OpenAPI specififcation (OAS)&quot;</a> as description standard instead.</p>\n<p>RAML still provides advantages in modeling an API through it&#39;s more expressive modeling language and can produce OAS</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\raml.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "react",
          "release": "2018-03-01",
          "title": "React.js",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\react.md",
          "body": "<p>The past months have shown that React is still a great fit for us for frontend-heavy\napplications. With its rewritten core in version 16, Facebook shows how\nimportant this framework is for them. Therefore, Facebook is investing a lot of effort into React and a\nhealthy community. In addition, we <strong>REALLY</strong> enjoy writing React\ncomponents – so much so, that we have to move this library into <strong>adopt</strong>!</p>\n"
        },
        {
          "name": "react",
          "release": "2017-03-01",
          "title": "React.js",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\react.md",
          "body": "<p>React claims to be &quot;the V in MVC&quot;. But for us it is much more than that. React\nimproved the way we approach frontend applications as we build them. Its\nfunctional way of writing components and its declarative JSX syntax help us to\nbuild interactive UIs very efficiently. React&#39;s one-way data flow keeps\neverything modular and fast and makes even large applications more readable.</p>\n<p>Components are the central point of React - once we fully started\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://facebook.github.io/react/docs/thinking-in-react.html\">thinking in react</a>,\nour components became smaller, more reusable and better testable.</p>\n<p>After some 1.5 years of experience with React and the steady growth of the\ncommunity and ecosystem around it, we can confidently say that we still see\ngreat protential to build upcoming projects with React.</p>\n"
        }
      ],
      "name": "react",
      "title": "React.js",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>The past months have shown that React is still a great fit for us for frontend-heavy\napplications. With its rewritten core in version 16, Facebook shows how\nimportant this framework is for them. Therefore, Facebook is investing a lot of effort into React and a\nhealthy community. In addition, we <strong>REALLY</strong> enjoy writing React\ncomponents – so much so, that we have to move this library into <strong>adopt</strong>!</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\react.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "reactive-programming",
          "release": "2019-11-01",
          "title": "Reactive Programming",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\reactive-programming.md",
          "body": "<p>The reactive style of programming promotes event-based thinking and modeling -- \nand by that assists in creating more decoupled solutions.</p>\n<p>Synergies arise, when people understand the concepts of this pattern: by using marble diagrams, \nwhich are a de-facto standard in visualizing algorithms in a reactive style, a common ground for communication \nis available regardless of the programming language used.</p>\n<p>When appropriate, we choose more explicitly the Reactive Programming pattern and therefore moved this to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "reactive-programming",
          "release": "2018-03-01",
          "title": "Reactive Programming",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\reactive-programming.md",
          "body": "<p>Classic (web-) applications typically consist of transactions that submit\nlarge forms to the server side, which then processes these and, in response, returns HTML\nfor the browser to render. Today&#39;s applications have more and more\nfine-grained &#39;real-time&#39;-like aspects: A simple modification of a form field\ncould trigger a complete roundtrip to the server including other services and\npersistence. Naturally, all of these transactions should respect the\nexpectations of a user who wants a highly interactive application.</p>\n<p>&quot;Reactive Programming&quot; tries to provide an answer to the challanges mentioned above\nby raising the level of abstraction. This allows you to focus on the stream of\nevents that make up your business logic in a responsive, asynchronous fashion.</p>\n<p>There are various descriptions of what Reactive Programming actually is - at\nthe most general level it is programming with asynchronous data streams and\ncontains tools to create, manipulate, combine and filter these streams. Under the term\n&quot;Reactive Programming&quot;, we summarize the principles and implementations that\nunderlie <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://reactivex.io/\">ReactiveX</a> and the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.reactivemanifesto.org/\">Reactive\nManifesto</a>. </p>\n<p>&quot;Reactive Programming&quot; is employed in many of our services – frontend and\nbackend – but not always as an explicitly choosen pattern. As different\nplattforms have different means to tackle this style of programming, we choose\nto include &quot;Reactive Programming&quot; as a general Method and Patterns Item in\naddition to concrete libraries and APIs such as\n<a href=\"languages-and-frameworks/rxjs.html\">Rx.JS</a> or <a href=\"/techradar/languages-and-frameworks/akka-streams.html\">Akka\nStreams</a> to highlight the\nimportance of the approach in general.</p>\n"
        }
      ],
      "name": "reactive-programming",
      "title": "Reactive Programming",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>The reactive style of programming promotes event-based thinking and modeling -- \nand by that assists in creating more decoupled solutions.</p>\n<p>Synergies arise, when people understand the concepts of this pattern: by using marble diagrams, \nwhich are a de-facto standard in visualizing algorithms in a reactive style, a common ground for communication \nis available regardless of the programming language used.</p>\n<p>When appropriate, we choose more explicitly the Reactive Programming pattern and therefore moved this to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\reactive-programming.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "redux",
          "release": "2017-03-01",
          "title": "Redux",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\redux.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://redux.js.org/\">Redux</a> helps us to maintain state in our frontend applications in a more predictable and clearer way. It is extendable though middleware, it has a great documentation and some awesome <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/gaearon/redux-devtools\">devtools</a> that are especially helpful when you are new to Redux.</p>\n<p>The functional concepts for updating the state, combined with immutable data, lead to extremely easy and enjoyable <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://redux.js.org/docs/recipes/WritingTests.html\">unit tests</a> - this is maybe the biggest plus for us developers.</p>\n<p>The official <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/reactjs/react-redux\">react-redux bindings</a> also made it straightforward to weave Redux into our React applications. For asynchronous actions we use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://redux-saga.github.io/redux-saga/\">redux-sagas</a> which has proven itself as a better alternative for <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/gaearon/redux-thunk\">redux-thunk</a>.</p>\n<p>Currently, we use Redux only in our React projects, but we are evaluating it together with other frameworks such as Angular or Vue.js, as well.</p>\n"
        }
      ],
      "name": "redux",
      "title": "Redux",
      "ring": "trial",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://redux.js.org/\">Redux</a> helps us to maintain state in our frontend applications in a more predictable and clearer way. It is extendable though middleware, it has a great documentation and some awesome <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/gaearon/redux-devtools\">devtools</a> that are especially helpful when you are new to Redux.</p>\n<p>The functional concepts for updating the state, combined with immutable data, lead to extremely easy and enjoyable <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://redux.js.org/docs/recipes/WritingTests.html\">unit tests</a> - this is maybe the biggest plus for us developers.</p>\n<p>The official <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/reactjs/react-redux\">react-redux bindings</a> also made it straightforward to weave Redux into our React applications. For asynchronous actions we use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://redux-saga.github.io/redux-saga/\">redux-sagas</a> which has proven itself as a better alternative for <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/gaearon/redux-thunk\">redux-thunk</a>.</p>\n<p>Currently, we use Redux only in our React projects, but we are evaluating it together with other frameworks such as Angular or Vue.js, as well.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\redux.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "resilience-thinking",
          "release": "2017-03-01",
          "title": "Resilience thinking",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\resilience-thinking.md",
          "body": "<p>Resilience is the cabability of an application or service to resist different error scenarios. Especially for distributed systems - where a lot of communication between different services happen - it&#39;s very important to explicitly think of implementing resilience.</p>\n<p>There are a lot of different resilience patterns and it is also a matter of the overall software design. Typical patterns and methods used are:</p>\n<ul>\n<li>  Do not hide API calls or any other external communication in your application (for example with unnecessary abstraction) - instead make it explicit that an external communication happens - e.g. by using the Facade Pattern. On the one hand, this makes it obvious that a potential slow and errorprone communication is going to happen, and it makes it easier to implement error handling.</li>\n<li>  Detect errors explicitly: Check the response message format and configure proper timeouts for external communication</li>\n<li>  Handle errors in a smart way: Show a nice error message to your customer or, even better, graceful degrade features - e.g. by showing some fallback text</li>\n<li>  Use Message-based communication where useful (<a href=\"/techradar/methods-and-patterns/decoupling-infrastructure-via-messaging.html\">Decoupling Infrastructure via Messaging</a>)</li>\n<li>  Use Circuit Breaker to Isolate errors and allow system to recover</li>\n<li>  Use short activation paths in your strategic architecture - so that there is only a minimal set of communications between your services required for certain features or business requests</li>\n</ul>\n<p>&quot;Embrace Errors&quot; should be the mindset - because its not a question if errors appear - it&#39;s just a question of when.</p>\n"
        }
      ],
      "name": "resilience-thinking",
      "title": "Resilience thinking",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>Resilience is the cabability of an application or service to resist different error scenarios. Especially for distributed systems - where a lot of communication between different services happen - it&#39;s very important to explicitly think of implementing resilience.</p>\n<p>There are a lot of different resilience patterns and it is also a matter of the overall software design. Typical patterns and methods used are:</p>\n<ul>\n<li>  Do not hide API calls or any other external communication in your application (for example with unnecessary abstraction) - instead make it explicit that an external communication happens - e.g. by using the Facade Pattern. On the one hand, this makes it obvious that a potential slow and errorprone communication is going to happen, and it makes it easier to implement error handling.</li>\n<li>  Detect errors explicitly: Check the response message format and configure proper timeouts for external communication</li>\n<li>  Handle errors in a smart way: Show a nice error message to your customer or, even better, graceful degrade features - e.g. by showing some fallback text</li>\n<li>  Use Message-based communication where useful (<a href=\"/techradar/methods-and-patterns/decoupling-infrastructure-via-messaging.html\">Decoupling Infrastructure via Messaging</a>)</li>\n<li>  Use Circuit Breaker to Isolate errors and allow system to recover</li>\n<li>  Use short activation paths in your strategic architecture - so that there is only a minimal set of communications between your services required for certain features or business requests</li>\n</ul>\n<p>&quot;Embrace Errors&quot; should be the mindset - because its not a question if errors appear - it&#39;s just a question of when.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\resilience-thinking.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "rest-assured",
          "release": "2017-03-01",
          "title": "Rest Assured (Testing)",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rest-assured.md",
          "body": "<p><strong><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/rest-assured/rest-assured\">REST-assured</a></strong> is a Java DSL for simplifying testing of REST-based services built on top of HTTP Builder. It supports the most important http request methods and can be used to validate and verify the response of these requests.</p>\n<p>At AOE, we use REST-assured with Spock to automate our API testing. We appreciate the easy-to-use DSL, which uses the Given-When-Then template (also known as Gherkin language). This template helps other project members to understand the code/test easily.</p>\n<p>Because of the seamless integration with Spock and our positive experience in one of our major projects, we classify REST-assured as <em>assess.</em></p>\n"
        }
      ],
      "name": "rest-assured",
      "title": "Rest Assured (Testing)",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><strong><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/rest-assured/rest-assured\">REST-assured</a></strong> is a Java DSL for simplifying testing of REST-based services built on top of HTTP Builder. It supports the most important http request methods and can be used to validate and verify the response of these requests.</p>\n<p>At AOE, we use REST-assured with Spock to automate our API testing. We appreciate the easy-to-use DSL, which uses the Given-When-Then template (also known as Gherkin language). This template helps other project members to understand the code/test easily.</p>\n<p>Because of the seamless integration with Spock and our positive experience in one of our major projects, we classify REST-assured as <em>assess.</em></p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rest-assured.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "rust",
          "release": "2021-01-01",
          "title": "Rust",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "featured": true,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\rust.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.rust-lang.org/\">Rust</a> is a young and modern programming language initialy developed by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://research.mozilla.org/\">Mozilla Research</a>.</p>\n<p>It provides a strict typesystem, compile-time memory-safety, excellent <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://doc.rust-lang.org/cargo/\">package manager</a>, objectoriented &amp; functional programming, task-based concurency, good readability and maintainability and many more.\nIt has a C/C++ <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf\">comparable efficiency</a> and helps the programmer to avoid unnecessary security-relevant memory-related bugs during compile-time.\nSince every memory-allocation is directly released after it can&#39;t be used anymore (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@rabin_gaire/memory-management-rust-cf65c8465570\">owner deletion</a>), no garbage collection is needed.</p>\n<p>C/C++ code/libraries can be integrated by it&#39;s <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/rust-lang/rust-bindgen\">binding generator tool</a>.</p>\n<p>At stackoverflow it is votes 5 years in a row (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2016#technology-most-loved-dreaded-and-wanted\">2016</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2017#technology-_-most-loved-dreaded-and-wanted-languages\">2017</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2018#technology-_-most-loved-dreaded-and-wanted-languages\">2018</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages\">2019</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved\">2020</a>) for the <code>most loved programming-language</code> by  programmers.\nThe <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved\">popularity</a> is growing continuous.</p>\n<p>With it&#39;s memory-safety/efficiency and energy-efficiency it help&#39;s to save money for bug-fixing, energy and cloud-computing.</p>\n"
        }
      ],
      "name": "rust",
      "title": "Rust",
      "ring": "assess",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.rust-lang.org/\">Rust</a> is a young and modern programming language initialy developed by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://research.mozilla.org/\">Mozilla Research</a>.</p>\n<p>It provides a strict typesystem, compile-time memory-safety, excellent <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://doc.rust-lang.org/cargo/\">package manager</a>, objectoriented &amp; functional programming, task-based concurency, good readability and maintainability and many more.\nIt has a C/C++ <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf\">comparable efficiency</a> and helps the programmer to avoid unnecessary security-relevant memory-related bugs during compile-time.\nSince every memory-allocation is directly released after it can&#39;t be used anymore (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@rabin_gaire/memory-management-rust-cf65c8465570\">owner deletion</a>), no garbage collection is needed.</p>\n<p>C/C++ code/libraries can be integrated by it&#39;s <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/rust-lang/rust-bindgen\">binding generator tool</a>.</p>\n<p>At stackoverflow it is votes 5 years in a row (<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2016#technology-most-loved-dreaded-and-wanted\">2016</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2017#technology-_-most-loved-dreaded-and-wanted-languages\">2017</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2018#technology-_-most-loved-dreaded-and-wanted-languages\">2018</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-languages\">2019</a>, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved\">2020</a>) for the <code>most loved programming-language</code> by  programmers.\nThe <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved\">popularity</a> is growing continuous.</p>\n<p>With it&#39;s memory-safety/efficiency and energy-efficiency it help&#39;s to save money for bug-fixing, energy and cloud-computing.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\rust.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "rxjava",
          "release": "2017-03-01",
          "title": "RxJava",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rxjava.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/ReactiveX/RxJava\">RxJava</a> is the Open Source Java implementation of ReactiveX. The main concept heavily relies on the Observer- (and Subscriber)-Pattern. An Observer emits a stream of data, which can be consumed by Subscribers. The Subscriber reacts (That&#39;s where the &#39;Rx&#39; comes from) asynchronously to those data events. Reactive Extensions were originally developed by Mircosoft&#39;s Erik Meijer and his team and have been ported to all major programming languages after being released to the public as Open Source software. We use RxJava (but actually RxAndroid to be precise) in the Congstar Android App to let the UI layer react to changes in the underlaying data layer.</p>\n"
        }
      ],
      "name": "rxjava",
      "title": "RxJava",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/ReactiveX/RxJava\">RxJava</a> is the Open Source Java implementation of ReactiveX. The main concept heavily relies on the Observer- (and Subscriber)-Pattern. An Observer emits a stream of data, which can be consumed by Subscribers. The Subscriber reacts (That&#39;s where the &#39;Rx&#39; comes from) asynchronously to those data events. Reactive Extensions were originally developed by Mircosoft&#39;s Erik Meijer and his team and have been ported to all major programming languages after being released to the public as Open Source software. We use RxJava (but actually RxAndroid to be precise) in the Congstar Android App to let the UI layer react to changes in the underlaying data layer.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rxjava.md"
    },
    {
      "flag":FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "rxjs",
          "release": "2021-01-01",
          "title": "RxJs",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\rxjs.md",
          "body": "<p>RX/JS aka reactive streams</p>\n<p>RxJS is an implementation for the reactive programming paradigm which implements mostly the observer and iterator\npattern and follows the functional programming ideas. The pattern actually got a renaissance because it&#39;s not completely\nnew but has new implementations in many frameworks and languages like Angular, Akka, Spring and many more. Reason for \nthat attention actually is (in the javascript world), that observables can be cancelled (by rules too) and  observables\ncan pass (stream) data on multiple events. Both aspects are not well realizable using promises e.g. and both were also\ndetected as a huge limitation in the JavaScript community — and so it&#39;s worth to get an understanding for reactive\nprogramming in general.</p>\n<p>We at AOE actually use RxJS in combination with Angular and can fully recommend the approach of observables.</p>\n"
        },
        {
          "name": "rxjs",
          "release": "2017-03-01",
          "title": "RxJs",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\rxjs.md",
          "body": "<p>RX/JS aka reactive streams</p>\n<p>RxJS is an implementation for the reactive programming paradigm which implements mostly the observer and iterator\npattern and follows the functional programming ideas. The pattern actually got a renaissance because it&#39;s not completely\nnew but has new implementations in many frameworks and languages like Angular, Akka, Spring and many more. Reason for \nthat attention actually is (in the javascript world), that observables can be cancelled (by rules too) and  observables\ncan pass (stream) data on multiple events. Both aspects are not well realizable using promises e.g. and both were also\ndetected as a huge limitation in the JavaScript community — and so it&#39;s worth to get an understanding for reactive\nprogramming in general.</p>\n<p>We at AOE actually use RxJS in combination with Angular and think that it&#39;s worth to dive deeper into this paradigm.</p>\n"
        }
      ],
      "name": "rxjs",
      "title": "RxJs",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>RX/JS aka reactive streams</p>\n<p>RxJS is an implementation for the reactive programming paradigm which implements mostly the observer and iterator\npattern and follows the functional programming ideas. The pattern actually got a renaissance because it&#39;s not completely\nnew but has new implementations in many frameworks and languages like Angular, Akka, Spring and many more. Reason for \nthat attention actually is (in the javascript world), that observables can be cancelled (by rules too) and  observables\ncan pass (stream) data on multiple events. Both aspects are not well realizable using promises e.g. and both were also\ndetected as a huge limitation in the JavaScript community — and so it&#39;s worth to get an understanding for reactive\nprogramming in general.</p>\n<p>We at AOE actually use RxJS in combination with Angular and can fully recommend the approach of observables.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\rxjs.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "sass",
          "release": "2017-03-01",
          "title": "SASS",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\sass.md",
          "body": "<p>SASS (Syntactically Awesome Style-Sheets) is an extension to native CSS, which, as a preprocessor, simplifies the generation of CSS by offering features that enable developers to more efficiently write robust, better readable and maintainable CSS.</p>\n<p>Core features of SASS are:</p>\n<ul>\n<li>  Nesting of rules: CSS rules can be indented, reducing redundancy of selectors and increasing readability due to shorter selectors.</li>\n<li>  Use of variables: Commonly-used values such as colors can be stored in variables</li>\n<li>  Mixins: Often-used CSS blocks can be referenced by using mixins, which work like functions</li>\n<li>  Extends: CSS properties can be inherited</li>\n<li>  SASS files can be split into modules, which leads to smaller files and better file structures</li>\n<li>  Operators: Simple math calculations can be applied to CSS properties</li>\n<li>  Easily to integrate in nodejs-environments and build tools such s <a href=\"/techradar/tools/npm.html\">NPM</a>, <a href=\"/techradar/tools/gulp.html\">Gulp</a> and <a href=\"/techradar/tools/grunt.html\">Grunt</a>.</li>\n</ul>\n<p>SASS has been widely adopted for many years and has evolved to an industry-standard backed by an active community since 2006.</p>\n<p>The learning curve is very smooth as SASS is fully compatible to CSS, meaning that all features are optional: Starting with SASS is as easy as renaming .css-files to .scss in a first step and then refactoring it step-by-step with the use of SASS features.</p>\n<p>At AOE, SASS has been recommended by the frontend COI and is used in nearly every current project.</p>\n<p>More information:</p>\n<ul>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sass-lang.com/\">SASS Language</a></li>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sassdoc.com/\">SASSDoc</a></li>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom\">Improving Sass code quality on</a> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://theguardian.com\">theguardian.com</a></li>\n</ul>\n"
        }
      ],
      "name": "sass",
      "title": "SASS",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>SASS (Syntactically Awesome Style-Sheets) is an extension to native CSS, which, as a preprocessor, simplifies the generation of CSS by offering features that enable developers to more efficiently write robust, better readable and maintainable CSS.</p>\n<p>Core features of SASS are:</p>\n<ul>\n<li>  Nesting of rules: CSS rules can be indented, reducing redundancy of selectors and increasing readability due to shorter selectors.</li>\n<li>  Use of variables: Commonly-used values such as colors can be stored in variables</li>\n<li>  Mixins: Often-used CSS blocks can be referenced by using mixins, which work like functions</li>\n<li>  Extends: CSS properties can be inherited</li>\n<li>  SASS files can be split into modules, which leads to smaller files and better file structures</li>\n<li>  Operators: Simple math calculations can be applied to CSS properties</li>\n<li>  Easily to integrate in nodejs-environments and build tools such s <a href=\"/techradar/tools/npm.html\">NPM</a>, <a href=\"/techradar/tools/gulp.html\">Gulp</a> and <a href=\"/techradar/tools/grunt.html\">Grunt</a>.</li>\n</ul>\n<p>SASS has been widely adopted for many years and has evolved to an industry-standard backed by an active community since 2006.</p>\n<p>The learning curve is very smooth as SASS is fully compatible to CSS, meaning that all features are optional: Starting with SASS is as easy as renaming .css-files to .scss in a first step and then refactoring it step-by-step with the use of SASS features.</p>\n<p>At AOE, SASS has been recommended by the frontend COI and is used in nearly every current project.</p>\n<p>More information:</p>\n<ul>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sass-lang.com/\">SASS Language</a></li>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://sassdoc.com/\">SASSDoc</a></li>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom\">Improving Sass code quality on</a> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://theguardian.com\">theguardian.com</a></li>\n</ul>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\sass.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "scala-lang",
          "release": "2018-03-01",
          "title": "Scala Lang",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\scala-lang.md",
          "body": "<p>Scala is used in many projects at AOE. We have therefore moved it to the <strong>adopt</strong> level.</p>\n"
        },
        {
          "name": "scala-lang",
          "release": "2017-03-01",
          "title": "Scala Lang",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\scala-lang.md",
          "body": "<p>Besides Java, Scala is the most mature language on the Java Virtual Machine. Its unique blend of object-oriented and functional language features and rich type system with advanced type inference enables one to write concise code.</p>\n<p>It is fully interoperable with Java but has a big ecosystem of tools and frameworks on its own.</p>\n<p>Scala provides one of the best high-level concurrency- and async features on the language level as well as on the framework level, making it the default choice of twitter and the like.</p>\n<p>At AOE, we already use Scala in various projects to create scalable backend systems (Play, Akka) or for batch processing (Spark).</p>\n"
        }
      ],
      "name": "scala-lang",
      "title": "Scala Lang",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Scala is used in many projects at AOE. We have therefore moved it to the <strong>adopt</strong> level.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\scala-lang.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "self-service-infrastructure",
          "release": "2019-11-01",
          "title": "Self-service infrastructure",
          "ring": "trial",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\self-service-infrastructure.md",
          "body": "<p>Moved to &quot;trial&quot;.</p>\n"
        },
        {
          "name": "self-service-infrastructure",
          "release": "2018-03-01",
          "title": "Self-service infrastructure",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\self-service-infrastructure.md",
          "body": "<p>With growing teams, growing projects and growing infrastructures, we decided to follow the &quot;You build it, you run it&quot; approach, and when we started to run Kubernetes, where we have a great abstraction layer between infrastructure and applications, we decided to make the developer teams write their own Helm charts.\nBy agreeing on just a couple of patters, this allows us to easily manage a microservice architecture with more than 60 Applications, without too much hassle managing infrastructure/runtimes for (among others) JVM, Go and PHP applications.\nMost of the hosting/provisioning decisions are better kept within the team, as the teams know how their applications work. By providing a clear interface, this became the cornerstone for running our microservice architecture, and keeping the amount of actual servers much lower than in projects with a centralized operations/IT team.</p>\n<p>Eventually, self-service infrastructure, and &quot;You build it, you run it&quot;, allowed us to give both our application developers as well as our infrastructure engineers more flexibility than one team explaining to another team what to do, resulting in a better collaboration than before.</p>\n"
        }
      ],
      "name": "self-service-infrastructure",
      "title": "Self-service infrastructure",
      "ring": "trial",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Moved to &quot;trial&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\self-service-infrastructure.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "settings-injection",
          "release": "2017-03-01",
          "title": "Settings Injection",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\settings-injection.md",
          "body": "<p>While deploying applications to an environment, the application typically needs to be configured for that specific environment. Typical settings include domain names, database credentials and the location of other dependent services such as cache backends, queues or session storages.</p>\n<p>These settings should not be shipped with the build package. Instead, it&#39;s the environment - this build is being deployed to - that should expose these values to application. A common way to &quot;inject&quot; these values is by making them available as environment variables or dynamically creating configuration files for the application. You can achieve this pattern without special tools - but this concept of settings injection also works with tools such as <a href=\"/techradar/tools/consul.html\">Consul</a>, <a href=\"/techradar/platforms-and-aoe-services/kubernetes.html\">kubernetes</a> (with configMaps and secrets) or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/AOEpeople/YAD\">YAD</a>.</p>\n<p>In this manner, the build package can be independent from the environment it&#39;s being deployed to - making it easier to follow the &quot;Build once, deploy often&quot; CI/CD principle.</p>\n"
        }
      ],
      "name": "settings-injection",
      "title": "Settings Injection",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>While deploying applications to an environment, the application typically needs to be configured for that specific environment. Typical settings include domain names, database credentials and the location of other dependent services such as cache backends, queues or session storages.</p>\n<p>These settings should not be shipped with the build package. Instead, it&#39;s the environment - this build is being deployed to - that should expose these values to application. A common way to &quot;inject&quot; these values is by making them available as environment variables or dynamically creating configuration files for the application. You can achieve this pattern without special tools - but this concept of settings injection also works with tools such as <a href=\"/techradar/tools/consul.html\">Consul</a>, <a href=\"/techradar/platforms-and-aoe-services/kubernetes.html\">kubernetes</a> (with configMaps and secrets) or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/AOEpeople/YAD\">YAD</a>.</p>\n<p>In this manner, the build package can be independent from the environment it&#39;s being deployed to - making it easier to follow the &quot;Build once, deploy often&quot; CI/CD principle.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\settings-injection.md"
    },
    {
      "flag":FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "shared-responsibility",
          "release": "2021-01-01",
          "title": "Shared Responsibility Model",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\shared-responsibility.md",
          "body": "<p>Since introducing &quot;Platform Engineering Team&quot; the builds, maintains and operates our Kubernetes clusters and other releated platform services the question occurs who&#39;s in charge the various tasks like keeping things up and running, applying criticial security fixed, updated software in general, keeping an eye on the bill and many more topics. We&#39;re not proposing a solution on how to split responsibilities here, but we want to raise awareness for bringing everybody together and formally discuss all responsibilities and write them down similar to (and possible extending) AWS&#39;s <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">shared responsibilty modell</a>.\nSome of the topics include: 24/7 on-call support, broken deployment pipelines, and vulnerability scans.</p>\n"
        }
      ],
      "name": "shared-responsibility",
      "title": "Shared Responsibility Model",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>Since introducing &quot;Platform Engineering Team&quot; the builds, maintains and operates our Kubernetes clusters and other releated platform services the question occurs who&#39;s in charge the various tasks like keeping things up and running, applying criticial security fixed, updated software in general, keeping an eye on the bill and many more topics. We&#39;re not proposing a solution on how to split responsibilities here, but we want to raise awareness for bringing everybody together and formally discuss all responsibilities and write them down similar to (and possible extending) AWS&#39;s <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">shared responsibilty modell</a>.\nSome of the topics include: 24/7 on-call support, broken deployment pipelines, and vulnerability scans.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\shared-responsibility.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "sonarqube",
          "release": "2019-11-01",
          "title": "SonarQube",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\sonarqube.md",
          "body": "<p>At AOE, we are using SonarQube to get a historical overview of the code quality in our Projects. With SonarQube, you can get a quick insight into the condition of your code. It analyzes many languages and provides numerous static analysis rules.\nSonarQube is also being used for Static Application Security Testing (SAST) which scans our code for potential security vulnerabilities and is an essential element of our Secure Software Development Lifecycle.</p>\n"
        },
        {
          "name": "sonarqube",
          "release": "2018-03-01",
          "title": "SonarQube",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\sonarqube.md",
          "body": "<p>At AOE, we&#39;re evaluating SonarQube to get an historical overview of the code quality of our Projects. With SonarQube, you can get a quick hint about the condition of your code. It analyzes many languages and provides numerous static analysis rules.</p>\n"
        }
      ],
      "name": "sonarqube",
      "title": "SonarQube",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>At AOE, we are using SonarQube to get a historical overview of the code quality in our Projects. With SonarQube, you can get a quick insight into the condition of your code. It analyzes many languages and provides numerous static analysis rules.\nSonarQube is also being used for Static Application Security Testing (SAST) which scans our code for potential security vulnerabilities and is an essential element of our Secure Software Development Lifecycle.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\sonarqube.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "sparkpost",
          "release": "2017-03-01",
          "title": "SparkPost",
          "ring": "assess",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\sparkpost.md",
          "body": "<p>Sparkpost is an SaaS service for E-Mail delivery and E-Mail templating that can be used to send E-Mails by calling an API.</p>\n<p>In a lot of projects, it is a typical requirement that different E-Mails need to be sent and that the project stakeholders want to adjust E-Mail templates and content on a relatively regular basis.</p>\n<p>Also, (mass) sending E-Mails and avoiding that they are classified as Spam is not an easy topic. That&#39;s why we decided to use E-Mail delivery services in our projects and evaluated different providers.</p>\n<p>We decided to start using SparkPost because of pricing, feature set and the available reviews on the Internet. There are also other possible solutions such as SendGrid or Postmark.</p>\n"
        }
      ],
      "name": "sparkpost",
      "title": "SparkPost",
      "ring": "assess",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>Sparkpost is an SaaS service for E-Mail delivery and E-Mail templating that can be used to send E-Mails by calling an API.</p>\n<p>In a lot of projects, it is a typical requirement that different E-Mails need to be sent and that the project stakeholders want to adjust E-Mail templates and content on a relatively regular basis.</p>\n<p>Also, (mass) sending E-Mails and avoiding that they are classified as Spam is not an easy topic. That&#39;s why we decided to use E-Mail delivery services in our projects and evaluated different providers.</p>\n<p>We decided to start using SparkPost because of pricing, feature set and the available reviews on the Internet. There are also other possible solutions such as SendGrid or Postmark.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\sparkpost.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "spock_geb",
          "release": "2017-03-01",
          "title": "Spock + Geb",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\spock_geb.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.spockframework.org\">spockframework.org</a> - Spock is a testing and specification framework for Java and Groovy applications. What makes it stand out from the crowd is its beautiful and highly expressive specification language. Thanks to its JUnit runner, Spock is compatible with most IDEs, build tools and continuous integration servers. Spock is inspired from JUnit, jMock, RSpec, Groovy, Scala, Vulcans, and other fascinating life forms.</p>\n<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.gebish.org\">gebish.org</a> - Geb is a browser automation solution. It brings together the power of WebDriver, the elegance of jQuery content selection, the robustness of Page Object modelling and the expressiveness of the Groovy language. It can be used for scripting, scraping and general automation or equally as a functional/web/acceptance testing solution via integration with testing frameworks such as Spock, JUnit &amp; TestNG.</p>\n<p>At AOE, we use Spock in combination with Geb in various projects for black-box testing. Mainly, we implement our functional integration and acceptance testing automation with these frameworks, which work together seamlessly. And, we also like the convenience of extending the tests with Groovy built-ins or custom extensions.</p>\n<p>Because of the successful use in two of our large projects and the wide range of opportunities within the testing domain with Spock and Geb, we classify this combo with adopt.</p>\n<!--except-->\n\n"
        }
      ],
      "name": "spock_geb",
      "title": "Spock + Geb",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.spockframework.org\">spockframework.org</a> - Spock is a testing and specification framework for Java and Groovy applications. What makes it stand out from the crowd is its beautiful and highly expressive specification language. Thanks to its JUnit runner, Spock is compatible with most IDEs, build tools and continuous integration servers. Spock is inspired from JUnit, jMock, RSpec, Groovy, Scala, Vulcans, and other fascinating life forms.</p>\n<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.gebish.org\">gebish.org</a> - Geb is a browser automation solution. It brings together the power of WebDriver, the elegance of jQuery content selection, the robustness of Page Object modelling and the expressiveness of the Groovy language. It can be used for scripting, scraping and general automation or equally as a functional/web/acceptance testing solution via integration with testing frameworks such as Spock, JUnit &amp; TestNG.</p>\n<p>At AOE, we use Spock in combination with Geb in various projects for black-box testing. Mainly, we implement our functional integration and acceptance testing automation with these frameworks, which work together seamlessly. And, we also like the convenience of extending the tests with Groovy built-ins or custom extensions.</p>\n<p>Because of the successful use in two of our large projects and the wide range of opportunities within the testing domain with Spock and Geb, we classify this combo with adopt.</p>\n<!--except-->\n\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\spock_geb.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "spring-boot",
          "release": "2019-11-01",
          "title": "Spring Boot",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\spring-boot.md",
          "body": "<p>We now have several years of experiences with Spring Boot, \nand a big projects Microservice Environment runs completely on Spring Boot, \nso it&#39;s time to update it to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "spring-boot",
          "release": "2018-03-01",
          "title": "Spring Boot",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\spring-boot.md",
          "body": "<p>We have had good experiences with Spring Boot, and already have several Spring Boot-based services running in \nproduction. We like the ease of kickstarting new services and the variety of tools in the Spring ecosystem.</p>\n"
        },
        {
          "name": "spring-boot",
          "release": "2017-03-01",
          "title": "Spring Boot",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\spring-boot.md",
          "body": "<p>With Spring Boot you create standalone Spring Applications with minimum configuration. <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://projects.spring.io/spring-boot/\">Spring Boot</a> rapidly gets you up and running for production.</p>\n<p>With an embedded Tomcat, Jetty and Undertow you have everything you need to deploy your application out-of-the-box.</p>\n<p>The Spring Cloud ecosystem also gives you a lot of extension points for developing, deploying and running cloud applications.</p>\n<p>It&#39;s based on the rock-solid Spring framework and provides excellent documentation.</p>\n<p>At AOE, we use Spring Boot in a microservice architecture. Together with Groovy as the implementation Language, and some other Tools (Spring Security, Cloud, HATEOAS, Data, Session) from the Spring environment, we are able to create complex and powerful applications in no time.</p>\n"
        }
      ],
      "name": "spring-boot",
      "title": "Spring Boot",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>We now have several years of experiences with Spring Boot, \nand a big projects Microservice Environment runs completely on Spring Boot, \nso it&#39;s time to update it to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\spring-boot.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "spring-rest-docs",
          "release": "2017-03-01",
          "title": "Spring REST Docs",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\spring-rest-docs.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://projects.spring.io/spring-restdocs/\">Spring REST Docs</a> auto generates <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://asciidoctor.org/\">Asciidoctor</a> snippets with the help of <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle#spring-mvc-test-framework\">Spring MVC Test</a> or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://extranet.aoe.com/confluence/pages/viewpage.action?pageId=86937862\">RestAssured</a>.  So you can be sure that your tests are inline with the documentation.</p>\n<p>At AOE, we use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://projects.spring.io/spring-restdocs/\">Spring REST Docs</a> to document our Rest Services and Hal Resources. We also use it to auto generate <a href=\"/techradar/tools/wiremock.html\">Wiremock</a> Stubs, so the consumer of the service can test against the exact API of the service.</p>\n"
        }
      ],
      "name": "spring-rest-docs",
      "title": "Spring REST Docs",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://projects.spring.io/spring-restdocs/\">Spring REST Docs</a> auto generates <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://asciidoctor.org/\">Asciidoctor</a> snippets with the help of <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle#spring-mvc-test-framework\">Spring MVC Test</a> or <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://extranet.aoe.com/confluence/pages/viewpage.action?pageId=86937862\">RestAssured</a>.  So you can be sure that your tests are inline with the documentation.</p>\n<p>At AOE, we use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://projects.spring.io/spring-restdocs/\">Spring REST Docs</a> to document our Rest Services and Hal Resources. We also use it to auto generate <a href=\"/techradar/tools/wiremock.html\">Wiremock</a> Stubs, so the consumer of the service can test against the exact API of the service.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\spring-rest-docs.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "storybook",
          "release": "2019-11-01",
          "title": "Storybook",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\storybook.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://storybook.js.org/\">Storybook</a> is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.\nStorybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.</p>\n"
        }
      ],
      "name": "storybook",
      "title": "Storybook",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://storybook.js.org/\">Storybook</a> is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.\nStorybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\storybook.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "strategic-domain-driven-design",
          "release": "2017-03-01",
          "title": "Strategic Domain Driven Design",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\strategic-domain-driven-design.md",
          "body": "<p>Design of distributed applications need to be done wisely. Strategic Domain Driven Design is an approach for modelling large-scale applications and systems and is introduced in the last part of Eric Evans&#39; book <em><strong>Domain Driven Design</strong></em>.</p>\n<p>Domain driven design is a well-known pattern family and has been established at AOE for quite some time now. Unlike Domain Driven Design, which focuses on the tactical design in an application, strategic domain driven design is an approach that is very helpful for the high-level strategic design of an application and distributed software architecture.</p>\n<p>It is a pattern familiy focused on using and defining Bounded Context and thinking explicitly of the different relationship patterns and the required &quot;translation&quot; of similar &quot;concepts&quot; between the bounded contexts. It is helpful to argue and find a good strategic architecture in alignment with the requirements, the domain and by considering Conway&#39;s Law.\nA context map and a common conceptional core help to understand and improve the overall strategic picture. Especially with the <a href=\"/techradar/methods-and-patterns/microservices.html\">Microservice</a> approach, it is important to define and connect services following the low coupling - high cohesion principles by idendifying fitting bounded contexts.</p>\n<p>The following chart gives an overview of possible relationships between bounded contexts:\n<img src=\"/techradar/images/strategic-domain-driven-design-relationships.png\" alt=\"strategic-domain-driven-design-relationships\"></p>\n<p>While we have found that this approach is especially useful in designing distributed systems and applications with <a href=\"/techradar/methods-and-patterns/microservices.html\">microservices</a>, we have also extended this approach to provide guidlines for general enterprise architectures.</p>\n"
        }
      ],
      "name": "strategic-domain-driven-design",
      "title": "Strategic Domain Driven Design",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Design of distributed applications need to be done wisely. Strategic Domain Driven Design is an approach for modelling large-scale applications and systems and is introduced in the last part of Eric Evans&#39; book <em><strong>Domain Driven Design</strong></em>.</p>\n<p>Domain driven design is a well-known pattern family and has been established at AOE for quite some time now. Unlike Domain Driven Design, which focuses on the tactical design in an application, strategic domain driven design is an approach that is very helpful for the high-level strategic design of an application and distributed software architecture.</p>\n<p>It is a pattern familiy focused on using and defining Bounded Context and thinking explicitly of the different relationship patterns and the required &quot;translation&quot; of similar &quot;concepts&quot; between the bounded contexts. It is helpful to argue and find a good strategic architecture in alignment with the requirements, the domain and by considering Conway&#39;s Law.\nA context map and a common conceptional core help to understand and improve the overall strategic picture. Especially with the <a href=\"/techradar/methods-and-patterns/microservices.html\">Microservice</a> approach, it is important to define and connect services following the low coupling - high cohesion principles by idendifying fitting bounded contexts.</p>\n<p>The following chart gives an overview of possible relationships between bounded contexts:\n<img src=\"/techradar/images/strategic-domain-driven-design-relationships.png\" alt=\"strategic-domain-driven-design-relationships\"></p>\n<p>While we have found that this approach is especially useful in designing distributed systems and applications with <a href=\"/techradar/methods-and-patterns/microservices.html\">microservices</a>, we have also extended this approach to provide guidlines for general enterprise architectures.</p>\n",
      "info": "",
      "release": "2017-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\strategic-domain-driven-design.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "stride-threat-modeling",
          "release": "2019-11-01",
          "title": "STRIDE Threat Modeling",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\stride-threat-modeling.md",
          "body": "<p>STRIDE is a model of threat groups that helps to identify security threats to any application, component or infrastructure.</p>\n<p>The acronym stands for:</p>\n<ul>\n<li>Spoofing</li>\n<li>Tampering</li>\n<li>Repudiation</li>\n<li>Information disclosure</li>\n<li>Denial of service</li>\n<li>Elevation of privilege</li>\n</ul>\n<p>AOE is applying the threat model in collaborative sessions using the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://social.technet.microsoft.com/wiki/contents/articles/285.elevation-of-privilege-the-game.aspx\">Elevation of Privilege Card Game</a> which helps to spark imagination and makes threats more tangible. </p>\n"
        }
      ],
      "name": "stride-threat-modeling",
      "title": "STRIDE Threat Modeling",
      "ring": "trial",
      "quadrant": "methods-and-patterns",
      "body": "<p>STRIDE is a model of threat groups that helps to identify security threats to any application, component or infrastructure.</p>\n<p>The acronym stands for:</p>\n<ul>\n<li>Spoofing</li>\n<li>Tampering</li>\n<li>Repudiation</li>\n<li>Information disclosure</li>\n<li>Denial of service</li>\n<li>Elevation of privilege</li>\n</ul>\n<p>AOE is applying the threat model in collaborative sessions using the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://social.technet.microsoft.com/wiki/contents/articles/285.elevation-of-privilege-the-game.aspx\">Elevation of Privilege Card Game</a> which helps to spark imagination and makes threats more tangible. </p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\stride-threat-modeling.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "styleguide-driven-development",
          "release": "2018-03-01",
          "title": "Styleguide Driven Development",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\styleguide-driven-development.md",
          "body": "<p>Updated to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "styleguide-driven-development",
          "release": "2017-03-01",
          "title": "Styleguide Driven Development",
          "ring": "trial",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\styleguide-driven-development.md",
          "body": "<p>The goal of Styleguide Driven Development is to develop your application user Interface independently and reusable in a Pattern Library.<br>In the old days, the frontend was developed based on page-centric Photoshop files which made it hard to change things afterwards. With styleguide driven development you build smaller elements, which are reusable in all of your frontends.</p>\n<p>You can start developing your UI components (HTML/CSS/JavaScript) very early in the production phase without having to wait for a ready-to-use development system.<br>Designers and Testers can give feedback early and you can share the documentation and code with external teams.</p>\n<p>At AOE, we use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://trulia.github.io/hologram/\">Hologram</a> to build a living documentation right from the source files. Whenever a new UI Element is needed, a developer starts building it in the styleguide -- not in the actual application code. By writing the code for the new component, the documentation for it is created instantly. Any other developer can easily see which elements exist and how it can be used in the code.</p>\n"
        }
      ],
      "name": "styleguide-driven-development",
      "title": "Styleguide Driven Development",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>Updated to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\styleguide-driven-development.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "symfony-components",
          "release": "2017-03-01",
          "title": "Symfony Components",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\symfony-components.md",
          "body": "<p>Symfony Components are part of the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://symfony.com/\">Symfony Framework</a> and they are designed as decoupled and reusable PHP components.</p>\n<p>Their use cases vary from simple little helpers such as a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/var_dumper.html\">beautified var_dump</a> to more complex ones such as access control, list-based <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/security.html\">security mechanisms</a> and an easy-to-integrate <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/console.html\">console component</a> to give your already existing applications some CLI capabilities. They are <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/projects\">used by a lot of PHP-based projects</a> such as Typo3, Magento, Composer, PHPUnit and Doctrine, with contributions continually taking place. If you are planning the next project with PHP components, you should have a look at the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/components\">Symfony Components list</a>, which includes a lot of well-designed, decoupled <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/symfony\">Open Source pieces of PHP code</a>.</p>\n"
        }
      ],
      "name": "symfony-components",
      "title": "Symfony Components",
      "ring": "trial",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Symfony Components are part of the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://symfony.com/\">Symfony Framework</a> and they are designed as decoupled and reusable PHP components.</p>\n<p>Their use cases vary from simple little helpers such as a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/var_dumper.html\">beautified var_dump</a> to more complex ones such as access control, list-based <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/security.html\">security mechanisms</a> and an easy-to-integrate <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/doc/current/components/console.html\">console component</a> to give your already existing applications some CLI capabilities. They are <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/projects\">used by a lot of PHP-based projects</a> such as Typo3, Magento, Composer, PHPUnit and Doctrine, with contributions continually taking place. If you are planning the next project with PHP components, you should have a look at the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://symfony.com/components\">Symfony Components list</a>, which includes a lot of well-designed, decoupled <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/symfony\">Open Source pieces of PHP code</a>.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\symfony-components.md"
    },
    {
      "flag": FlagType.new,
      "featured": true,
      "revisions": [
        {
          "name": "team-start-page",
          "release": "2021-01-01",
          "title": "Team Start Page",
          "ring": "adopt",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\team-start-page.md",
          "body": "<p>A team start page helps (new) members to orientate themselves. \nIt normally displays all team members with their roles and contact data as well as a \ncollection of links to the necessary tools, e.g.</p>\n<ul>\n<li>Project environments (staging, prod, ...)</li>\n<li>Project development setup</li>\n<li>Version control system</li>\n<li>Code Review Tool</li>\n<li>Team rules</li>\n<li>Slack invitation</li>\n<li>...</li>\n</ul>\n<p>Simply things, everyone should know.</p>\n<p>At AOE we care to have a team start page for each team in our wiki.</p>\n"
        }
      ],
      "name": "team-start-page",
      "title": "Team Start Page",
      "ring": "adopt",
      "quadrant": "methods-and-patterns",
      "body": "<p>A team start page helps (new) members to orientate themselves. \nIt normally displays all team members with their roles and contact data as well as a \ncollection of links to the necessary tools, e.g.</p>\n<ul>\n<li>Project environments (staging, prod, ...)</li>\n<li>Project development setup</li>\n<li>Version control system</li>\n<li>Code Review Tool</li>\n<li>Team rules</li>\n<li>Slack invitation</li>\n<li>...</li>\n</ul>\n<p>Simply things, everyone should know.</p>\n<p>At AOE we care to have a team start page for each team in our wiki.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\team-start-page.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "temporal-modeling",
          "release": "2019-11-01",
          "title": "Temporal Modeling",
          "ring": "assess",
          "quadrant": "methods-and-patterns",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\temporal-modeling.md",
          "body": "<p>Temporal Modeling is way of modeling software systems and components by putting events first.</p>\n<p>The usual way of modeling software is to find structures, things and relations.\nWe try to find the relevant aspects of a domain and put all properties into an object-oriented model.\nTrying to create a second model for a related business process, having the structural model already in place,\nmight result in a process representation that is tightly coupled with the assumptions built up from the structural\nmodel and too far away from reality.</p>\n<p>By focusing on the domain processes first, one can visualize all aspects of a process over time.\nHaving the process visualized, allows to see potential pitfalls or forgotten aspects.\nWith a temporal model at hand, it is easy to create a object-oriented or structural model that perfectly\nrepresents all required information.</p>\n<p>We tried this method when tackling big or complex domains. </p>\n"
        }
      ],
      "name": "temporal-modeling",
      "title": "Temporal Modeling",
      "ring": "assess",
      "quadrant": "methods-and-patterns",
      "body": "<p>Temporal Modeling is way of modeling software systems and components by putting events first.</p>\n<p>The usual way of modeling software is to find structures, things and relations.\nWe try to find the relevant aspects of a domain and put all properties into an object-oriented model.\nTrying to create a second model for a related business process, having the structural model already in place,\nmight result in a process representation that is tightly coupled with the assumptions built up from the structural\nmodel and too far away from reality.</p>\n<p>By focusing on the domain processes first, one can visualize all aspects of a process over time.\nHaving the process visualized, allows to see potential pitfalls or forgotten aspects.\nWith a temporal model at hand, it is easy to create a object-oriented or structural model that perfectly\nrepresents all required information.</p>\n<p>We tried this method when tackling big or complex domains. </p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\temporal-modeling.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "terraform",
          "release": "2019-11-01",
          "title": "Terraform",
          "ring": "adopt",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\terraform.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.terraform.io/\">Terraform</a> is a tool for building, changing and versioning infrastructure using the infrastructure as code pattern.\nTerraform supports popular service providers like AWS, Google Cloud Platform, Azure and many more.</p>\n<p>Infrastructure is described in configuration files trough the HCL (HashiCorp Configuration Language), which brings a set of string interpolations and built-in functions, \nincluding conditionals and loops. Terraform validates configuration files before trying to run updates. It checks not only that all files use the correct syntax, \nbut also that all parameters are accessible and the configuration as a whole is valid. In Terraform, you can (and should) run a ‘plan’ step before applying any changes. \nThis step tells you precisely what is going to change and why.\nAnother feature of Terraform is that it makes it easy to reuse code by using modules. That gives a lot of leeway in structuring projects in the way it makes most sense.</p>\n<p>Here at AOE we use terraform in multiple teams to provision infrastructure and manage their lifecycle on cloud platforms such as AWS and for platforms such as Kubernetes.</p>\n"
        },
        {
          "name": "terraform",
          "release": "2018-03-01",
          "title": "Terraform",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\terraform.md",
          "body": "<p>For the infrastructure of our OM3 projects we run multiple Kubernetes clusters, and to orchestrate the infrastructure provisioning we quickly decided to go with Terraform.\nTerraform allows us to easily manage our infrastructure, from AWS EC2 instances to RabbitMQ message queues.\nAlso, the Kops installer for Kubernetes on AWS uses Terraform as its main building brick, and we can trigger Kops via Terraform.</p>\n<p>We bring terraform together with <a href=\"/techradar/tools/helm.html\">Helm</a> to manage similar parts of the infrastructure, for example a shared file with domainname to application mappings allows us to provision Route 53 DNS entries via Terraform and then roll out Kubernetes Ingress definitions with the appropriate hostname to service mapping via Helm.</p>\n"
        }
      ],
      "name": "terraform",
      "title": "Terraform",
      "ring": "adopt",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.terraform.io/\">Terraform</a> is a tool for building, changing and versioning infrastructure using the infrastructure as code pattern.\nTerraform supports popular service providers like AWS, Google Cloud Platform, Azure and many more.</p>\n<p>Infrastructure is described in configuration files trough the HCL (HashiCorp Configuration Language), which brings a set of string interpolations and built-in functions, \nincluding conditionals and loops. Terraform validates configuration files before trying to run updates. It checks not only that all files use the correct syntax, \nbut also that all parameters are accessible and the configuration as a whole is valid. In Terraform, you can (and should) run a ‘plan’ step before applying any changes. \nThis step tells you precisely what is going to change and why.\nAnother feature of Terraform is that it makes it easy to reuse code by using modules. That gives a lot of leeway in structuring projects in the way it makes most sense.</p>\n<p>Here at AOE we use terraform in multiple teams to provision infrastructure and manage their lifecycle on cloud platforms such as AWS and for platforms such as Kubernetes.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\terraform.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "typescript",
          "release": "2019-11-01",
          "title": "Typescript",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\typescript.md",
          "body": "<p>As writing frontend applications becomes more complex, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.typescriptlang.org/\">TypeScript</a> allows us to scale client side code easily, even with large code bases. We use typescript successfully at production for many projects and we are only going to use it even more in the future. We highly recommend using typescript over javascript, therefore we have decided to move it to adopt.</p>\n"
        },
        {
          "name": "typescript",
          "release": "2017-03-01",
          "title": "Typescript",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\typescript.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.typescriptlang.org/\">TypeScript</a> is a language that gets transpiled to native JavaScript code.</p>\n<p>It offers support for the latest EcmaScript features and has strict typing and support for interfaces built in.</p>\n<p>JavaScript scoping, which led into recurring workarounds such as **var self = this, myFunc.bind(this)<em>,</em>**was eliminated in TypeScript.</p>\n<p>In TypeScript <strong>this</strong> stays <strong>this</strong>, which leads to more readable and understandable code from an OOP perspective.</p>\n<p>TypeScript continues to be actively developed by Microsoft and is well-Integrated in today&#39;s IDEs.</p>\n<p>The excellent structure and the possibilities for extension make it a good choice to consider for larger JavaScript projects.</p>\n<p>Typescript was the choice for <a href=\"/techradar/languages-and-frameworks/angular.html\">Angular</a> and one can assume that it will get more traction with the success of Angular in the future.</p>\n<p>There are also projects that support Typescript „code execution“ on the server such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/package/ts-node\">ts-node</a>.</p>\n"
        }
      ],
      "name": "typescript",
      "title": "Typescript",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>As writing frontend applications becomes more complex, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.typescriptlang.org/\">TypeScript</a> allows us to scale client side code easily, even with large code bases. We use typescript successfully at production for many projects and we are only going to use it even more in the future. We highly recommend using typescript over javascript, therefore we have decided to move it to adopt.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\typescript.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "typo3-as-a-framework",
          "release": "2017-03-01",
          "title": "TYPO3 as a Framework",
          "ring": "hold",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\typo3-as-a-framework.md",
          "body": "<p>We should avoid building new projects around TYPO3 by default. A lot of past projects started with CMS-only features in the beginning, and, for example, developed toward highly customized E-Commerce platforms. Instead of rearranging the architecture in a useful way, functionality was built on top of TYPO3&#39;s core and its extension framework Extbase. In the context of larger projects, this lead to deployment monoliths and the inability to integrate new technologies.</p>\n<p>While in the past it was easy to kickstart a TYPO3 project with AOE&#39;s custom-tailored kickstarter, we now have a lot of knowledge and tools available to start projects with a much smarter architecture.\nThis does not mean you shouldn&#39;t use TYPO3 anymore, but use it as the tool it is: a content management system.</p>\n"
        }
      ],
      "name": "typo3-as-a-framework",
      "title": "TYPO3 as a Framework",
      "ring": "hold",
      "quadrant": "tools",
      "body": "<p>We should avoid building new projects around TYPO3 by default. A lot of past projects started with CMS-only features in the beginning, and, for example, developed toward highly customized E-Commerce platforms. Instead of rearranging the architecture in a useful way, functionality was built on top of TYPO3&#39;s core and its extension framework Extbase. In the context of larger projects, this lead to deployment monoliths and the inability to integrate new technologies.</p>\n<p>While in the past it was easy to kickstart a TYPO3 project with AOE&#39;s custom-tailored kickstarter, we now have a lot of knowledge and tools available to start projects with a much smarter architecture.\nThis does not mean you shouldn&#39;t use TYPO3 anymore, but use it as the tool it is: a content management system.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\typo3-as-a-framework.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "vault",
          "release": "2019-11-01",
          "title": "Vault",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\vault.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.vaultproject.io/\">Hashicorp Vault</a> is a Go application with a Rest/Cli interface that you can use to securely access secrets.\nA secret can be any  sensitive data, such as credentials, certificates, access tokens, encryption keys etc. \nVaults key features are a secure secret storage, dynamic secretes (create on-demand secrets), data encryption, secret leasing, renewal and revocation.</p>\n"
        }
      ],
      "name": "vault",
      "title": "Vault",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.vaultproject.io/\">Hashicorp Vault</a> is a Go application with a Rest/Cli interface that you can use to securely access secrets.\nA secret can be any  sensitive data, such as credentials, certificates, access tokens, encryption keys etc. \nVaults key features are a secure secret storage, dynamic secretes (create on-demand secrets), data encryption, secret leasing, renewal and revocation.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\vault.md"
    },
    {
      "flag":FlagType.changed,
      "featured": true,
      "revisions": [
        {
          "name": "vue",
          "release": "2021-01-01",
          "title": "Vue.js",
          "ring": "adopt",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\vue.md",
          "body": "<p>Updated to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "vue",
          "release": "2018-03-01",
          "title": "Vue.js",
          "ring": "trial",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\vue.md",
          "body": "<p>Updated to &quot;trial&quot;.</p>\n"
        },
        {
          "name": "vue",
          "release": "2017-03-01",
          "title": "Vue.js",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\vue.md",
          "body": "<p>Vue is a progressive, incrementally adoptable framework for building user interfaces maintained by Evan You. Unlike <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://vuejs.org/v2/guide/comparison.html\">other monolithic frameworks</a>, the core library is focused on the view layer only and is very easy to pick up and integrate with other libraries or existing projects. Vue is also perfectly capable of powering sophisticated single-page applications when used in combination with modern tooling and supporting libraries such as <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://vuex.vuejs.org/en/\">vuex</a> and <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://router.vuejs.org/en/\">vue-router</a>.</p>\n<p>Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. Under the hood, Vue compiles the templates into Virtual DOM render functions. Combined with the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://vuejs.org/v2/guide/reactivity.html\">reactivity system</a> Vue is able to intelligently figure out the minimal amount of components to re-render and apply the minimal amount of DOM manipulations when the app state changes, which provides for very high performance.</p>\n<p>Applications can be split into <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://vuejs.org/v2/guide/single-file-components.html\">Single File Components</a> - a single file containing the template (HTML), style (CSS) and functionality (JS) - which simplifies maintainability and testability of the code and promotes reusability across other projects.</p>\n"
        }
      ],
      "name": "vue",
      "title": "Vue.js",
      "ring": "adopt",
      "quadrant": "languages-and-frameworks",
      "body": "<p>Updated to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\vue.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "vuex",
          "release": "2019-11-01",
          "title": "Vuex",
          "ring": "assess",
          "quadrant": "languages-and-frameworks",
          "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\vuex.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://vuex.vuejs.org/\">Vuex</a> is a state management pattern + library for Vue.js applications.</p>\n"
        }
      ],
      "name": "vuex",
      "title": "Vuex",
      "ring": "assess",
      "quadrant": "languages-and-frameworks",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://vuex.vuejs.org/\">Vuex</a> is a state management pattern + library for Vue.js applications.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\vuex.md"
    },
    {
      "flag": FlagType.default,
      "featured": true,
      "revisions": [
        {
          "name": "webpack",
          "release": "2018-03-01",
          "title": "Webpack",
          "ring": "adopt",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\webpack.md",
          "body": "<p>In the last few years, Webpack has grown to become the de-facto standard for Web\nbundling in the JavaScript-Ecosystem. With Version 3, Webpack is a more robust\nand better documented bundler with nice new features such as\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/plugins/module-concatenation-plugin/\">scope hoisting</a>.\nBecause of this, and because of the continuously growing community, we have adopted Webpack for nearly\nevery single-page application we have.</p>\n"
        },
        {
          "name": "webpack",
          "release": "2017-03-01",
          "title": "Webpack",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\webpack.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/\">Webpack</a> is a web bundler for JavaScript applications. Instead of writing scripts to build and bundle your app like you would with <a href=\"/techradar/tools/gulp.html\">Gulp</a>, you just define what files you want to load into your bundle.</p>\n<p>In the following example, we define that JavaScript files should be handled by babel-loader, excluding the files from node_modules. The logic behind the process comes from the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/concepts/loaders/\">loader</a>. You can find the right loader in <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.npmjs.com/search?q=loader%20webpack&amp;page=1&amp;ranking=optimal\">npm</a>.</p>\n<pre><code>{\n    test: <span class=\"hljs-regexp\">/\\.js$/</span>,\n    loader: <span class=\"hljs-string\">&#x27;babel-loader&#x27;</span>,\n    <span class=\"hljs-keyword\">exclude</span>: <span class=\"hljs-regexp\">/node_modules/</span>,\n}\n</code></pre>\n<p>On top of that you can use <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/plugins/\">plugins</a> to optimize your bundle like uglifying your code or put your common libraries in a separate file.</p>\n<p>Under the hood, you&#39;ve got nice features such as:</p>\n<ul>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/guides/tree-shaking/\">tree shaking</a> to just bundle the features from a library you need</li>\n<li>  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/guides/code-splitting/\">chunk splitting</a> to split your code to manage the load prioritization</li>\n</ul>\n<p>The configuration is simple and there is excellent and extensive <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/configuration/\">documentation</a>.</p>\n"
        }
      ],
      "name": "webpack",
      "title": "Webpack",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>In the last few years, Webpack has grown to become the de-facto standard for Web\nbundling in the JavaScript-Ecosystem. With Version 3, Webpack is a more robust\nand better documented bundler with nice new features such as\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://webpack.js.org/plugins/module-concatenation-plugin/\">scope hoisting</a>.\nBecause of this, and because of the continuously growing community, we have adopted Webpack for nearly\nevery single-page application we have.</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\webpack.md"
    },
    {
      "flag": FlagType.changed,
      "featured": false,
      "revisions": [
        {
          "name": "wiremock",
          "release": "2021-01-01",
          "title": "Wiremock",
          "ring": "adopt",
          "quadrant": "tools",
          "featured": false,
          "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\wiremock.md",
          "body": "<p>Updated to &quot;adopt&quot;.</p>\n"
        },
        {
          "name": "wiremock",
          "release": "2017-03-01",
          "title": "Wiremock",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\wiremock.md",
          "body": "<p><strong><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://wiremock.org/docs/\">WireMock</a></strong> is an HTTP mock server - it can be used to mock APIs for testing.</p>\n<p>At its core, it is a web server that can be prepared to serve canned responses to particular requests (stubbing), and that captures incoming requests so that they can be checked later (verification). It also has an assortment of other useful features including record/playback of interactions with other APIs, injection of faults and delays, simulation of stateful behavior.</p>\n<p>It can be used as a library by any JVM application, or run as a standalone process either on the same host as the system under test or a remote server. All of WireMock&#39;s features are accessible via its REST (JSON) interface and its Java API. Additionally, the mock server can be configured via JSON files.</p>\n<p>At AOE, we use WireMock as a standalone server to mock APIs that are outside our system context to get a stable environment for testing and rapid feedback. Besides the decoupled test and development advantages, the mocked APIs can also be used in contract-based tests. We also use embedded WireMock in functional tests to stub external services. The explicit test of faults are especially helpful in building and testing the <a href=\"/techradar/methods-and-patterns/resilience-thinking.html\">resilience of your application</a>.</p>\n<p>Because of the features such as flexible deployment, powerful request matching and record/payback interactions, as well as the fact that the server runs stable in our project environments, we classify WireMock as <em>trial</em>.</p>\n"
        }
      ],
      "name": "wiremock",
      "title": "Wiremock",
      "ring": "adopt",
      "quadrant": "tools",
      "body": "<p>Updated to &quot;adopt&quot;.</p>\n",
      "info": "",
      "release": "2021-01-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2021-01-01\\wiremock.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "xataface",
          "release": "2017-03-01",
          "title": "Xataface",
          "ring": "hold",
          "quadrant": "platforms-and-aoe-services",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\xataface.md",
          "body": "<p>In the past, we used a custom-developed toolset with Xataface,T3Deploy and a settings migration tool as an easy way to manage TYPO3- and Magento-related configurations and to automatically create environments on our shared integration/dev-servers.</p>\n<p>Today, there is no advantage or need for Xataface. Don&#39;t use it anymore</p>\n"
        }
      ],
      "name": "xataface",
      "title": "Xataface",
      "ring": "hold",
      "quadrant": "platforms-and-aoe-services",
      "body": "<p>In the past, we used a custom-developed toolset with Xataface,T3Deploy and a settings migration tool as an easy way to manage TYPO3- and Magento-related configurations and to automatically create environments on our shared integration/dev-servers.</p>\n<p>Today, there is no advantage or need for Xataface. Don&#39;t use it anymore</p>\n",
      "info": "",
      "release": "2018-03-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\xataface.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "xmlunit",
          "release": "2017-03-01",
          "title": "XMLUnit",
          "ring": "assess",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2017-03-01\\xmlunit.md",
          "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.xmlunit.org/\">XMLUnit</a> is a Java and .NET testing framework for XML documents. It is very useful for performing contract tests with SOAP interfaces or other XML-based message types.</p>\n<p>Comparing strings of XML can lead to instable tests because of the changing order of elements or changed values, etc. XMLUnit provides features to address these issues. It is possible to validate against an XML Schema, use XPath queries or compare against expected outcomes. It also comes with a nice diff-engine which makes it easy to check the parts of an XML document that are important.</p>\n"
        }
      ],
      "name": "xmlunit",
      "title": "XMLUnit",
      "ring": "assess",
      "quadrant": "tools",
      "body": "<p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://www.xmlunit.org/\">XMLUnit</a> is a Java and .NET testing framework for XML documents. It is very useful for performing contract tests with SOAP interfaces or other XML-based message types.</p>\n<p>Comparing strings of XML can lead to instable tests because of the changing order of elements or changed values, etc. XMLUnit provides features to address these issues. It is possible to validate against an XML Schema, use XPath queries or compare against expected outcomes. It also comes with a nice diff-engine which makes it easy to check the parts of an XML document that are important.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\xmlunit.md"
    },
    {
      "flag": FlagType.default,
      "featured": false,
      "revisions": [
        {
          "name": "yarn",
          "release": "2018-03-01",
          "title": "Yarn",
          "ring": "trial",
          "quadrant": "tools",
          "fileName": "C:\\projects\\techradar\\Radar\\2018-03-01\\yarn.md",
          "body": "<p>Yarn is a dependency management tool for frontend (node) projects similar to npm. It also uses the npm registry and \ninfrastructure. According to Yarn, the benefits are that Yarn is much faster, automatically writes a .lock file and \nbuilds up a local cache to be even faster when installing packages again.</p>\n<p>At AOE, we started using Yarn in different projects to evaluate if we can switch to Yarn for all projects.</p>\n"
        }
      ],
      "name": "yarn",
      "title": "Yarn",
      "ring": "trial",
      "quadrant": "tools",
      "body": "<p>Yarn is a dependency management tool for frontend (node) projects similar to npm. It also uses the npm registry and \ninfrastructure. According to Yarn, the benefits are that Yarn is much faster, automatically writes a .lock file and \nbuilds up a local cache to be even faster when installing packages again.</p>\n<p>At AOE, we started using Yarn in different projects to evaluate if we can switch to Yarn for all projects.</p>\n",
      "info": "",
      "release": "2019-11-01",
      "fileName": "C:\\projects\\techradar\\Radar\\2019-11-01\\yarn.md"
    }
  ],
  "releases": [
    "2017-03-01",
    "2018-03-01",
    "2019-11-01",
    "2021-01-01"
  ]
}