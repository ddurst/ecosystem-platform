"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[5042],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Using VS Code with FxA"},l=void 0,c={unversionedId:"how-tos/using-vscode-with-fxa",id:"how-tos/using-vscode-with-fxa",title:"Using VS Code with FxA",description:"Getting Started",source:"@site/docs/how-tos/using-vscode-with-fxa.md",sourceDirName:"how-tos",slug:"/how-tos/using-vscode-with-fxa",permalink:"/ecosystem-platform/how-tos/using-vscode-with-fxa",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-vscode-with-fxa.md",tags:[],version:"current",frontMatter:{title:"Using VS Code with FxA"},sidebar:"docs",previous:{title:"Node Debugging",permalink:"/ecosystem-platform/how-tos/node-debugging"},next:{title:"Managing Yarn Dependencies",permalink:"/ecosystem-platform/how-tos/managing-yarn-dependencies"}},d=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Extensions",id:"extensions",children:[],level:2},{value:"Multi-Root Workspaces",id:"multi-root-workspaces",children:[],level:2},{value:"Using the VS Code Debugger",id:"using-the-vs-code-debugger",children:[],level:2},{value:"Collaborative Coding / Review",id:"collaborative-coding--review",children:[{value:"Collaborator Commits",id:"collaborator-commits",children:[],level:3}],level:2},{value:"Remote Development via SSH",id:"remote-development-via-ssh",children:[{value:"SSH Tips/Tricks",id:"ssh-tipstricks",children:[{value:"Port Forwarding",id:"port-forwarding",children:[],level:4}],level:3},{value:"Increase File watch Limit",id:"increase-file-watch-limit",children:[],level:3},{value:"Git",id:"git",children:[],level:3},{value:"Using SSH/GPG Agent Forwarding",id:"using-sshgpg-agent-forwarding",children:[{value:"VS Code",id:"vs-code",children:[],level:4},{value:"SSH Config",id:"ssh-config",children:[],level:4}],level:3},{value:"Using SSH/GPG Keys on the Remote Server",id:"using-sshgpg-keys-on-the-remote-server",children:[{value:"GnuPG (Commit signing)",id:"gnupg-commit-signing",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get familiar with VS Code it's recommended to read the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/getstarted/userinterface"},"getting started"),"\nsection of the VS Code docs so you're familiar with the UI terminology."),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"Opening the FxA repository will result in VS Code prompting you (in the lower right\nof your VS Code Window) to install the project's \"Recommended Extensions\". These include\nall the common extensions that will help in working with the FxA project's\npackages."),(0,r.kt)("h2",{id:"multi-root-workspaces"},"Multi-Root Workspaces"),(0,r.kt)("p",null,"In VS code, you typically open up a folder and the ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," directory inside\nis used for the project's debugging/task configurations and settings. Since the\nFxA repository is a mono-repo containing many individual packages, a single\nglobal ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," in the root directory is used for monorepo-wide settings and\nto recommend extensions. However, there are ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," directories within the\nindividual ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/*")," that add additional package specific debugging/task\nconfigurations."),(0,r.kt)("p",null,"To utilize these you can open the desired package folder directly or use a\nmulti-root workspace. Using the multi-root workspace feature allows you to add\nmultiple package folders to your workspace which enables all of their individual\ndebugging/task configurations."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces#_adding-folders"},"VS Code docs")," for instructions on how to add a folder to your workspace.\nNote that the first time you add a folder it will create a new Unnamed Workspace. You\ncan save the workspace as a file to easily resume the chosen open package folders\nfor future use as well."),(0,r.kt)("h2",{id:"using-the-vs-code-debugger"},"Using the VS Code Debugger"),(0,r.kt)("p",null,"Once you have added a folder to your workspace, the additional debug/task settings\nwill be available in the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_debug-view"},"Debug View"),". If you don't see any after adding\na package folder with a ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," directory, you may need to run 'Developer: Reload Window'\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette"},"command palette"),"."),(0,r.kt)("p",null,"The following videos show how to run test tasks and the FxA Auth Server with the debugger."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/g5b-3XSSqdU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jyqrV3NcLfc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"collaborative-coding--review"},"Collaborative Coding / Review"),(0,r.kt)("p",null,"The recommended extensions for FxA install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack"},"LiveShare Extension Pack"),"\nwhich includes the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/blogs/2017/11/15/live-share"},"LiveShare extension"),". Using this extension\nyou can share your editing and debugging environment including local terminals and the\ndebug session with invited developers."),(0,r.kt)("p",null,"VS Code has ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/use-cases"},"documented common use-cases for Live Share")," that provide\nuseful tips for setting up collaborative coding sessions. A good jumping off point to\nlearn more features available is the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/liveshare/overview/features"},"LiveShare feature overview"),"."),(0,r.kt)("h3",{id:"collaborator-commits"},"Collaborator Commits"),(0,r.kt)("p",null,"When working collaboratively, the final commit should reflect all the collaborators that\nworked on it. ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors"},"GitHub properly displays commits written with the ",(0,r.kt)("inlineCode",{parentName:"a"},"Co-Authored-by")),"\nline appended to the commit message."),(0,r.kt)("h2",{id:"remote-development-via-ssh"},"Remote Development via SSH"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/remote-overview"},"Remote development")," allows you to run the VS Code user interface on your\nlocal machine while a core VS Code instance is run on a remote machine either via SSH,\nWSL, docker Containers, or VS Online Azure instances. These instructions are tips for\nsetting up VS Code to work with a remote instance via SSH, and ",(0,r.kt)("strong",{parentName:"p"},"should be run on the\nremote instance"),"."),(0,r.kt)("h3",{id:"ssh-tipstricks"},"SSH Tips/Tricks"),(0,r.kt)("p",null,"Copy your local ssh public key to the remote machine on setup, this will create a user\nwith the username from your ssh keys email address."),(0,r.kt)("h4",{id:"port-forwarding"},"Port Forwarding"),(0,r.kt)("p",null,"It's useful to configure the forwards for FxA in your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," file so that\nthey're always active upon loading up VS Code. An example is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.ssh/config",title:"~/.ssh/config"},'Host remotedev\n  HostName yourServerIpAddress\n  User yourUsername\n  IdentityFile "C:\\Users\\yourUsername\\.ssh\\id_rsa_vs_code"\n  LocalForward 1080 localhost:1080\n  LocalForward 1111 localhost:1111\n  LocalForward 1112 localhost:1112\n  LocalForward 3030 localhost:3030\n  LocalForward 3031 localhost:3031\n  LocalForward 8080 localhost:8080\n  LocalForward 9000 localhost:9000\n  LocalForward 9010 localhost:9010\n  LocalForward 9292 localhost:9292\n  # vnc port\n  LocalForward 5901 localhost:5901\n')),(0,r.kt)("h3",{id:"increase-file-watch-limit"},"Increase File watch Limit"),(0,r.kt)("p",null,"Add this line to the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/sysctl.conf",title:"/etc/sysctl.conf"},"fs.inotify.max_user_watches=524288\n")),(0,r.kt)("p",null,"Reload sysctl settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -p\n")),(0,r.kt)("h3",{id:"git"},"Git"),(0,r.kt)("p",null,"Set your email/username:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n')),(0,r.kt)("p",null,"Configure your favorite editor for commit messages (vim):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.editor vim\n")),(0,r.kt)("h3",{id:"using-sshgpg-agent-forwarding"},"Using SSH/GPG Agent Forwarding"),(0,r.kt)("p",null,"For security reasons it\u2019s useful to avoid leaving SSH/GPG keys on remote development\ninstances."),(0,r.kt)("h4",{id:"vs-code"},"VS Code"),(0,r.kt)("p",null,"Enable agent forwarding option:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"User Settings -> Search for \u2018agent\u2019"),", verify ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote.SSH: Enable Agent Forwarding"),"\nis checked."),(0,r.kt)("h4",{id:"ssh-config"},"SSH Config"),(0,r.kt)("p",null,"Ensure you are running a local ssh-agent. You can see whether your agent is running\nand has keys added to it by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-add -l")," locally. If you do not see your keys,\nrun ssh-add and it will prompt to add your default keys or view the ssh-add docs to\nadd specific keys to your agent."),(0,r.kt)("p",null,"Additional instructions for ensuring your ssh-agent is running."),(0,r.kt)("p",null,"You will then need to add the appropriate setting to your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," file used\nwith VS Code. For the host in your config file, add ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardAgent yes"),", as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.ssh/config",title:"~/.ssh/config"},"Host remotedev\nHostName REMOTE_HOST\nUser REMOTE_USERNAME\nForwardAgent yes\n")),(0,r.kt)("p",null,"Open a VS Code session to the remote host, and in the Terminal window run ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-add -l"),"\nto verify the keys from the SSH agent are available. GPG Configuration Based on the\nGnuPG Agent Forwarding documentation."),(0,r.kt)("p",null,"On your local machine get the location of the extra GPG socket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpgconf --list-dir agent-extra-socket\n")),(0,r.kt)("p",null,"Install gnupg on remote server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install gnupg\n")),(0,r.kt)("p",null,"On the remote machine, get the location of the GPG socket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpgconf --list-dir agent-socket\n")),(0,r.kt)("p",null,"On the remote machine, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," file to add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/ssh/sshd_config",title:"/etc/ssh/sshd_config"},"StreamLocalBindUnlink yes\n")),(0,r.kt)("p",null,"Restart the remote machine\u2019s sshd service"),(0,r.kt)("p",null,"Ensure that your bash account prompts you for the GPG passphrase correctly by editing\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GPG_TTY=\\$(tty)\nexport GPG_TTY\n")),(0,r.kt)("p",null,"Export your GPG public keys and import them on the remote machine.\nEdit the local ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," file used with VS Code to include the GPG agent socket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.ssh/config",title:"~/.ssh/config"},"Host remotedev\nHostName REMOTE_HOST\nUser REMOTE_USERNAME\nForwardAgent yes\nRemoteForward /run/user/1000/gnupg/S.gpg-agent /c/Users/USERNAME/AppData/Roaming/gnupg/S.gpg-agent.extra\n")),(0,r.kt)("p",null,"Note that the remote agent-socket is first, followed by the local agent extra socket. On\nWindows systems the ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\...")," path should be translated as shown in the above example.\nIf you use gpg on the remote system already, you may need to delete the gpg-agent\nfile that already exists."),(0,r.kt)("h3",{id:"using-sshgpg-keys-on-the-remote-server"},"Using SSH/GPG Keys on the Remote Server"),(0,r.kt)("p",null,"This is a less secure method as the remote server has your ssh/gpg keys that could be\ncompromised. This method should only be used if you are unable to get GPG agent forwarding\nworking, which can occasionally occur between some client and SSH host OS's."),(0,r.kt)("h4",{id:"gnupg-commit-signing"},"GnuPG (Commit signing)"),(0,r.kt)("p",null,"Most developers have a primary key they regularly use. To prevent this key from possibly\nleaking its recommended to generate a new key for the remote machine with a rather long\nrandomly generated password you keep in a password manager."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install gnupg on remote server"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install gnupg\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new gpg key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --default-new-key-algo rsa4096 --gen-key\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your name and e-mail address to use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the password from the password manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run npm install in a separate window to help generate sufficient randomness\non the server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tell git about your gpg key")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Auto-sign commits per project or everywhere")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your GPG public key to your GitHub account")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that your bash account prompts you for the GPG passphrase correctly by\nediting your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GPG_TTY=\\$(tty)\nexport GPG_TTY\n")))))}u.isMDXComponent=!0}}]);