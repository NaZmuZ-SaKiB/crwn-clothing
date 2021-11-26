import CollectionItem from '../collection-item/collection-item';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './preview-collection.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;