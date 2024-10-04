import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button Component", () => {
    it("should render with red background if disabled", () => {
        render(<Button disabled={false} onClick={() => {}}>Click me</Button>)

        const button = screen.getByRole("button", {name: "Click me"}) // getByRole: pode pegar a role do elemento (como: "button", "link" e outros elementos acessíveis no DOM)

        expect(button).toHaveStyle({backgroundColor: "red"}) // toHaveStyle: podemos passar o css que a gente quer que o elemento tenha
    })

    it("should call onClick prop on click", () => {
        const onClick = jest.fn() // jest.fn(): retorna uma função monitorável pelo jest

        render(<Button disabled onClick={onClick}>Click me</Button>)

        const button = screen.getByText(/click me/i)
        
        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled() // toHaveBeenCalled: espera que o elemento/evento tenha sido chamado
    })
})