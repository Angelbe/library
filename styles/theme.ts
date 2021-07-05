interface ITheme {
  defaultFontSize: string;
  mainColor: string;
  mainColorlighter: string;
  secundaryColor: string;
  secundaryColorLighter: string;
  disabledColor: string;
  borderRadius: string;
}

const theme: ITheme = {
  defaultFontSize: "16px",
  mainColor: "#f7f7f7",
  mainColorlighter: "#efefef",
  secundaryColor: "#f51379",
  secundaryColorLighter: "#ea66a2",
  disabledColor: "#b5b3b3",
  borderRadius: "10px",
};

export { theme };
