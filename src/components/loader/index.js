import React from 'react'
import './index.scss'

const Loader = () => (
    <div className="loader">
        <img
            src="https://ecs7.tokopedia.net/assets-tokopoints/prod/images/2018/09/Logo_2.gif"
            alt=""
        />
    </div>
)

export class LoaderFlash extends React.Component {
    timer = null
    state = {
        show: true,
    }

    componentDidMount() {
        if (!this.timer) {
            this.timer = window.setTimeout(() => {
                this.setState({
                    show: false,
                })
                if (this.props.onClose) {
                    this.props.onClose()
                }
            }, this.props.timeout || 3000)
        }
    }

    render() {
        const { message } = this.props
        if (!this.state.show) {
            return null
        }

        return (
            <div className="loader full-screen">
                <img src={require('../../assets/images/success-image.gif')} alt="" />
                <div className="text">{message || 'Sent'}</div>
            </div>
        )
    }
}

export default Loader
