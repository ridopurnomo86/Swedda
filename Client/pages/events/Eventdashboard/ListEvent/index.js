import React from "react";
import CardEvent from "./CardEvent";
import { CardList, ListEventWrapper, Text, Title } from "./styles";

const ListEvent = () => (
    <ListEventWrapper>
        <Title>
            Next Event.
        </Title>
        <Text>
            Improve your skills by learning at events organized by our partners.
        </Text>
        <CardList>
            <CardEvent 
                imgSrc="https://source.unsplash.com/pypeCEaJeZY" 
                title="Learning About Sales Management" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veritatis magnam deserunt maiores saepe quisquam libero porro rem quod, 
                corrupti beatae quaerat rerum numquam ex autem commodi. Voluptatum, officia. Cupiditate, obcaecati!"
                sourcePerson="John Doe"
                time="25 Feb 2022 19:30 PM"
                users={35}
                location="Online"
            />
        </CardList>
    </ListEventWrapper>
);

export default ListEvent;