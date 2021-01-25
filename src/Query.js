const githubQuery = {
  query: `
  {
    viewer {
      name
      repositories(first:10) {
        nodes {
          name
          description
          id
          url
        }
      }
    }
  }
`,
};

export default githubQuery;
