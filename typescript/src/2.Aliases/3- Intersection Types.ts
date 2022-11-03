type Draggable = {
    drag: () => void

}

type Resizable = {
    resize: () => void
}

type UiWidget = Draggable & Resizable;

let textBox:UiWidget = {
    drag: () => console.log('drag'),
    resize:()=>console.log('resize')
}