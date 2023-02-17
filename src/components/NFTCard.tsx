
interface IMetadata {
    image: string,
    name: string,
    description: string,
    attributes?: Array<Object>,
}

function NFTCard(props: { metadata: IMetadata }) {

    return (
        <>
            <div></div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );

}

export { NFTCard };
