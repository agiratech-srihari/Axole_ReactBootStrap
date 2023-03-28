import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

function PageNation() {
    return (
        <Container className='pagination-div'>

        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
        </Container>
    );
}

export default PageNation;