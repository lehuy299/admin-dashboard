import React, { useState } from 'react'
import withCard from '../withCard';

const Table = (props) => {

    const init_data_show = props.limit ? props.list_data.slice(0, Number(props.limit)) : props.list_data;
    const [data_show, setDataShow] = useState(init_data_show);

    const head_data = Object.keys(props.list_data[0]);
    
    const pages = Math.ceil(props.list_data.length / props.limit);

    const range = [...Array(pages).keys()];
    console.log('pages range', pages, range);

    return (
        <div>
            <table>
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
            <div></div>
        </div>
    )
}

export default withCard(Table)