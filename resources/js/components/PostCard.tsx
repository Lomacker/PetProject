import React from "react";

export default function PostCard(props: any) {
    return (
        <div className="position-relative grid-item">
            <div className="postCard d-flex flex-wrap justify-content-between position-absolute bg-transparent rounded">
                <div className="d-flex p-2">
                    <div className="postMark rounded-circle">
                        <i className="fi fi-sr-picture m"></i>
                    </div>
                    <div className="postMark rounded-circle">
                        <i className="fi fi-sr-video-camera-alt m"></i>
                    </div>
                </div>
                <div className="d-flex align-items-end p-2 text-white">
                    <img className="postAuthorImage rounded-circle" src="https://cdna.artstation.com/p/users/avatars/000/001/680/large/5bde0a322f0dc389327ba3b033df74af.jpg?1482343402" />
                    <div>
                        <h6>Candy Girls - Inktober Edition</h6>
                        <span>Gui Guimaraes</span>
                    </div>
                </div>
            </div>
            <img className="postImage rounded"
                 src="https://cdnb.artstation.com/p/assets/images/images/006/337/469/20170618212226/smaller_square/gui-guimaraes-amy-exploration-v05.jpg?1497838947"/>
        </div>
    );
}
