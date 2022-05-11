

function NewProduct(props) {
    return (
        <div>

            Name: <input
                type='text'
                value={props.n}
                onChange={props.onFieldsChanged}
                name='name'
            />

            Price: <input
                type='text'
                value={props.p}
                onChange={props.onFieldsChanged}
                name='price'
            />

            <input 
                type='button'
                value='Save'
                onClick={props.onSave}
                />

        </div>
    )

}

export default NewProduct;