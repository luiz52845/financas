import *  as C from './styles'
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}

export const ImputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2020, 9, 27),
            category: 'food',
            title: 'item de teste',
            value: 100
        }
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>

    );
}