import styled from "styled-components"
import { Icon } from "../../../components"

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
    return (
        <div className={className}>
            <div className="special-panel">
                <div className="published-at">
                    <Icon id="fa-calendar-o" margin="0 7px 0 0" onClick={() => { }} />
                    <div className="published-at-year">{publishedAt}</div>
                </div>

                <div className="buttons">
                    {editButton}
                    <Icon id="fa-trash-o" margin="0 7px 0 0" onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}

export const SpecialPanel = styled(SpecialPanelContainer)`

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: ${({margin}) => margin};
        font-size: 20px;
        height: 100%;
    }

    & .published-at {
        display: flex;
        gap: 10px;
    }

    & .published-at-year {
        display: flex;
        white-space: nowrap;
    }

    & i {
        position: relative;
        // font-size: 20px;
        top: -1px;
    }

    & .buttons {
        display: flex;
    }
`