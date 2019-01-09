const initState = {
  projects: [
    {id: '1', title: 'help me 1', content: 'blah blah blah blah'},
    {id: '2', title: 'help me 2', content: 'blah blah blah blah'},
    {id: '3', title: 'help me 3', content: 'blah blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state;
}

export default projectReducer;