import { render, screen, fireEvent } from '../test-utils';
import AlbumEditScreen from '../screenComponents/AlbumEditScreen';



test('should render input element', () =>{
    
})

// const mockedSetFormState = jest.fn()

// test('should render input element', async () => {
//     render(<AlbumEditScreen
//         formState={[]}
//         //for the hook it is best to mock it, just an empty function because we do not care about the outcome
//         setFormState={mockedSetFormState}
//         />);
//     const inputElement = screen.getByPlaceholderText(/Add album name.../i)
//     expect(inputElement).toBeInTheDocument();
// });

// test('should be able to type into input', async () => {
//     render(<ContactsScreen
//         searchState={[]}
//         //for the hook it is best to mock it, just an empty function because we do not care about the outcome
//         setSearchState={mockedSetTodo}
//         />);
//     const inputElement = screen.getByPlaceholderText(/Search Contacts.../i)
//     //fire event
//     fireEvent.change(inputElement, {target: {value: 'Francis Hui'}})
//     expect(inputElement.value).toBe('Francis Hui')
// });

/*
//should have empty inpt when add button is clicked 
test('shuld have empty input when the save button is clicked', async () =>{
    render
    const inputElement = screen.getByPlaceholderText(//i)
    const buttonElement = screen.getByRole('button', {name: /name of button/i})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('')
})
*/

