const htmlStyle = {color: "#F16529"};
const cssStyle = {color: "#2965F1"};
const jsStyle = {color: "#F7DF1E"};
const reactStyle = {color: "#00D8FF"};
const bsStyle = {color: "#563D7C"};
const sassStyle = {color: "#F06292"};
const gitStyle = {color: "#F03C2E"};
// const wpStyle = {color: "#21759B"};
// const npmStyle = {color: "#D50000"};
// const nodeStyle = {color: "#83CD29"};
const mysqlStyle = {color: "#00678C"};
// const mdbStyle = {color: "#6CAC48"};
// const jestStyle = {color: "#99415B"};

const techList = [
  {
    id: 1,
    technoIcon: <i style={htmlStyle}/>,
    technoName: "HTML5",
    stars: 3,
  },

  {
    id: 2,
    technoIcon: <FaCss3Alt style={cssStyle}/>,
    technoName: "CSS3",
    stars: 3,
  },

  {
    id: 3,
    technoIcon: <FaJsSquare style={jsStyle}/>,
    technoName: "JavaScript",
    stars: 2,
  },

  {
    id: 4,
    technoIcon: <FaReact style={reactStyle}/>,
    technoName: "React",
    stars: 2,
  },

  {
    id: 5,
    technoIcon: <FaBootstrap style={bsStyle}/>,
    technoName: "BootStrap",
    stars: 2,
  },

  {
    id: 6,
    technoIcon: <SiSass style={sassStyle}/>,
    technoName: "SASS",
    stars: 1,
  },

  {
    id: 7,
    technoIcon: <FaGitAlt style={gitStyle}/>,
    technoName: "Git",
    stars: 1,
  },
  // {
  //   id: 8,
  //   technoIcon: <FaWordpress style={wpStyle}/>,
  //   technoName: "Wordpress",
  //   stars: 1,
  // },

  // {
  //   id: 9,
  //   technoIcon: <FaNpm style={npmStyle}/>,
  //   technoName: "NPM",
  //   stars: 1,
  // },
  // {
  //   id: 10,
  //   technoIcon: <FaNodeJs style={nodeStyle}/>,
  //   technoName: "NodeJS",
  //   stars: 1,
  // },
  {
    id: 11,
    technoIcon: <GrMysql style={mysqlStyle}/>,
    technoName: "MySQL",
    stars: 1,
  },
  // {
  //   id: 12,
  //   technoIcon: <SiMongodb style={mdbStyle}/>,
  //   technoName: "MongoDB",
  //   stars: 1,
  // },
  // {
  //   id: 13,
  //   technoIcon: <SiJest style={jestStyle}/>,
  //   technoName: "Jest",
  //   stars: 1,
  // },
];

export default techList;
