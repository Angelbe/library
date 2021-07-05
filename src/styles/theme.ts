interface ITheme {
  defaultFontSize: string;
  mainColor: string;
  mainColorlighter: string;
  secundaryColor: string;
  secundaryColorLighter: string;
  borderRadius: string;
}

const theme: ITheme = {
  defaultFontSize: "16px",
  mainColor: "#F2AA4CFF",
  mainColorlighter: "#f5c167",
  secundaryColor: "#101820FF",
  secundaryColorLighter: "#918d84",
  borderRadius: "5px",
};

export { theme };
