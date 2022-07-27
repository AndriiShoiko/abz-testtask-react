import React, { useEffect, useState } from 'react';
import APIConnector from '../../API/APIConnector';
import Participant from '../Participant/Participant';
import ButtonLink from '../UI/ButtonLink/ButtonLink';
import s from './WorkingWithGetRequest.module.scss';

const WorkingWithGetRequest = () => {

    const [total_pages, setTotal_pages] = useState(0);
    const [page, setPage] = useState(0);

    const [participants, setParticipants] = useState([]);
    const [nextPage, setnextPage] = useState('');

    async function getNextParticipant() {

        let response = (!nextPage) ?
            APIConnector.getParticipantsFirstPage() :
            APIConnector.getParticipantsNextPage(nextPage);

        let dataRequest = (await response).data;
        try {
            setTotal_pages(Number(dataRequest.total_pages));
            setPage(Number(dataRequest.page));

            setnextPage(dataRequest.links.next_url);
            setParticipants(dataRequest.users);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => { getNextParticipant() }, []);

    return (
        <section className={s.get_request}>

            <div className={s.wrap}>
                <h1>Working with GET request</h1>
            </div>

            <div className={s.team_container}>
                {
                    participants.map((element) => {
                        return <Participant key={element.id} id={element.id} name={element.name}
                            position={element.position} email={element.email} phone={element.phone}
                            photo={element.photo} />
                    })
                }
            </div>
            <div className={s.wrap}>
                <div className={s.show_more}>
                    <ButtonLink
                        disabled={total_pages === page}
                        className={s.ButtonLink}
                        onClick={() => getNextParticipant()}>
                        Show more
                    </ButtonLink>
                </div>
            </div>

        </section>
    )
}

export default WorkingWithGetRequest;
