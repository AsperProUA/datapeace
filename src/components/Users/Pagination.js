import React from 'react';

function Paginator(props) {
    const { page, pagesQuantity, createPaginationPage } = props;
    const paginationList = [];
    let i;
    let pages = (page > pagesQuantity) ? pagesQuantity : page;
    if (pagesQuantity == 1) {
        return null;
    }
    if (pages > 1) {
        paginationList.push({ name: '<', value: pages - 1 });
    }


    if (pagesQuantity <= 9) {
        for (i = 1; i <= pagesQuantity; i++) {
            paginationList.push({ name: i, value: i });
        }
        paginationList.push({ name: '>', value: +pages + 1 });
    } else if (pagesQuantity > 9) {

        paginationList.unshift({ name: '|<', value: 1 });
        let pageStart = (pages > 4) ?  pages - 3 : 1;
        let pageEnd = (pages > 4) ? (((pagesQuantity - pages) < 4) ? (pagesQuantity) : pages + 3) : 7;

        for (i = pageStart; i <= pageEnd; i++) {
            paginationList.push({ name: i, value: i });
        }

        paginationList.push({ name: '>', value: +pages + 1 });
        paginationList.push({ name: '>|', value: pagesQuantity });
    }

    return (
        <div className="d-flex justify-content-start flex-wrap flex-md-nowrap">
            <div className="col-sm-12 col-md-5">Page {pages} of {pagesQuantity}</div>
            <div className="col-sm-12 col-md-7">
                <nav>
                    <ul className="pagination justify-content-start">
                        {paginationList.map((p, i) => (
                            <li key={i} className={pages == p.value || p.value > pagesQuantity ? 'page-item disabled' : 'page-item'}><button className="page-link" onClick={() => { createPaginationPage(p.value) }}>{p.name}</button></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Paginator;