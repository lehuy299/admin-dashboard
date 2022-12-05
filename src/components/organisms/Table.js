import React, { useState } from 'react'
import Pagination from '../molecules/Pagination';
import withCard from '../withCard';

const Table = (props) => {

    const init_data_show = props.limit ? props.list_data.slice(0, Number(props.limit)) : props.list_data;
    const [data_show, setDataShow] = useState(init_data_show);
    const [selected_page, setSelectedPage] = useState(0);

    const head_data = Object.keys(props.list_data[0]);
    
    const pages = Math.ceil(props.list_data.length / props.limit);

    const range = [...Array(pages).keys()];

    const selectPage = (page) => {
        const start = Number(props.limit) * page;

        const end = start + Number(props.limit);
        setDataShow(props.list_data.slice(start, end));
        setSelectedPage(page);
    };

    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        {
                            head_data.map((item, index) => props.renderHead(item, index))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data_show.map((item, index) => props.renderBody(item, index))
                    }
                </tbody>
            </table>
            <div className='mt-5 w-full flex justify-end'>
                <Pagination selectPage={selectPage} selected_page={selected_page} range={range}/>
            </div>
        </div>
    )
}

export default withCard(Table)