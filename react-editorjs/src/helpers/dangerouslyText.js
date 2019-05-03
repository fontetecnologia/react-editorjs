export default (text) => {
  return { dangerouslySetInnerHTML: { __html: text }};
}