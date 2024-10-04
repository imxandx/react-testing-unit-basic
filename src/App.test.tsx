import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

const sum = (x: number, y: number) => {
    return x * y
}

describe("App Component", () => {
    it("should sum correctly", () => {
        expect(sum(4, 4)).toBeGreaterThan(15)
    })

    it("should render App with hello message", () => {
        render(<App />) // render: vai renderizar o componente

        screen.getByText("Hello world!") // screen: vai ser usado para pegar algum elemento dentro de algum componente
    })

    it("should change message on button click", () => {
        render(<App />)

        screen.getByText("Message")

        const button = screen.getByText(/change message/i) // i: verifica se há a presença de tal palavra/frase no texto, independentemente se está em maíusculo ou minúsculo
        
        fireEvent.click(button) // fireEvet: executa certos eventos e, o primeiro parâmetro que ele recebe é o elemento que vai sofrer o evento
        
        screen.getByText(/new message!/i)

        const oldMessage = screen.queryByText("Message") // queryByText: quando ela não acha, ela não falha o teste, diferente do getByText
    
        expect(oldMessage).toBeNull() // toBeNull: verifica se é null
        expect(oldMessage).not.toBeInTheDocument() // getByText == toBeInTheDocument: verifica se é está no documento & .not é para inverter a expectativa

    })
})

export default {}