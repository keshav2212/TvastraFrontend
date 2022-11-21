import Login from './Login'
import {render , screen} from "@testing-library/react"


describe('should render Todo', () => { 
    test('should contain heading', () => { 
        render(<Login />)
        const heading = screen.getByText("Login")
        expect(heading).toBeInTheDocument()
     })
 })
