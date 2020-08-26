import React from 'react';
import { Media, CardImg, CardBody } from 'reactstrap';

function RenderLeader({leader}){
    return(
        <>
        <Media tag="li" className="mb-3">
            <Media object src={leader.image} alt={leader.name}  />     
                <Media left>                   
                <Media body className="ml-2">
                    <Media heading>
                        {leader.name}
                    </Media>                    
                    {leader.designation}
                    {leader.description}
                </Media> 
            </Media>
        </Media>
         </>
    );
};

export default RenderLeader;