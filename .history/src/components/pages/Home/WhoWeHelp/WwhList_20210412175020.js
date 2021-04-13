import React, { Component } from 'react';
import "../../../../scss/components/WwhList.scss";

const LOAD_ROWS = 3;

class WwhList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPageElements: [],
            renderComponent: false,
        }

    }

    countPaginationElements() {
 this.state
    }


    fetchRemoteList() {
        return fetch('http://localhost:3000/foundations/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data
                })

                this.setCurrentPageElements()
            })
    }

    setCurrentPageElements() {
        for (let i = 0; i < LOAD_ROWS; i++) {
            this.state.currentPageElements.push(this.state.list[i])
        };
        this.setState({
            renderComponent: true
        })
    }

    componentDidMount() {
        this.fetchRemoteList()
    }

    renderFoundations() {
        console.log(this.state.currentPageElements);
        let paragraphs = [];
        this.state.currentPageElements.forEach(el => {

            console.log(el);
            paragraphs.push(
                <p key={el.id}>{el.company}</p>
            )
        })
        return paragraphs;
    }

    renderCurrentPageList() {
        return (
            <div className="wwh-slide" id="wwh-foundation">

                <div className="wwh-slide-row" >

                    <div className="wwh-slide-row-box1">

                        <h3 className="company">Fundacja:
                            {this.renderFoundations()}
                        </h3>

                        {/* <div className="objective"> Cel i misja: {this.state.currentPageElements.forEach(el => (
                                <p key={el.id}>{el.objective}</p>
                            ))}</div> */}

                    </div>
                    {/* <div className="wwh-slide-row-box2">
                            <div className="items">{this.state.currentPageElements.forEach(el => (
                                <p key={el.id}>{el.items}</p>
                            ))}</div>
                        </div> */}
                </div>
                <div className="decoration-line"></div>

            </div>
        )

    }
    render() {
        if (!this.state.renderComponent) {
            return ""
        }
        return this.renderCurrentPageList();
    }

}






// const PAGE = 1;

// const ITEMS = 3;

// const extractItemsList = () => {

// }

// const fetchRemoteList = () => {
//     const [list, setList] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:3000/foundations/')
//             .then(res => res.json())
//             .then(data => setFoundations(data))
//     }, [])

//     return list;
// }

// function WwhList() {


//     return (
//         <>
//             <div className="wwh-slide" id="wwh-foundation">

//                 <div className="wwh-slide-row" >

//                     {/* <div className="wwh-slide-row-box1">

//                         <h3 className="company">Fundacja: {foundations.map(el => (
//                             <p key={el.id}>{el.company}</p>
//                         ))}</h3>

//                         <div className="objective"> Cel i misja: {foundations.map(el => (
//                             <p key={el.id}>{el.objective}</p>
//                         ))}</div>

//                     </div>
//                     <div className="wwh-slide-row-box2">
//                         <div className="items">{foundations.map(el => (
//                             <p key={el.id}>{el.items}</p>
//                         ))}</div>
//                     </div> */}
//                 </div>
//                 <div className="decoration-line"></div>

//             </div>

//         </>
//     )

// }

export default WwhList;































// export default WwhSlider;