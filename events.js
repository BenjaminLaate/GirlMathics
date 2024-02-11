function navigate(page) {
    const content = document.getElementById("content");

    switch (page) {

                case 'concert':
                    content.innerHTML = `
                        <p class="questions">Is this concert important for you?</p>
                        <button class="qButton" onclick="navigate('yImportant concert')">Yes</button>
                        <button class="qButton" onclick="navigate('nImportant concert')">No</button>
                    `;
                    break;

                        case 'yImportant concert':
                            content.innerHTML = `
                                <p class="questions">Does it cost more than 50?</p>
                                <button class="qButton" onclick="navigate('expensive concert')">Yes</button>
                                <button class="qButton" onclick="navigate('cheap concert')">No</button>
                            `;
                            break;

                                case 'expensive concert':
                                    content.innerHTML = `
                                        <p class="questions">Are there extra costs involved?</p>
                                        <button class="qButton" onclick="navigate('extraCost concert expensive')">Yes</button>
                                        <button class="qButton" onclick="navigate('noExtraCost concert expensive')">No</button>
                                    `;
                                    break;

                                            case 'extraCost concert expensive':
                                            content.innerHTML = `
                                                <p class="questions">Do you have a discount for at least 20% off available</p>
                                                <button class="qButton" onclick="navigate('extraCost concert discount')">Yes</button>
                                                <button class="qButton" onclick="navigate('extraCost concert noDiscount')">No</button>
                                            `;
                                            break;

                                                    case 'extraCost concert discount':
                                                    content.innerHTML = `
                                                        <p>Go for it!</p>
                                                        `;
                                                    break;

                                                    case 'extraCost concert noDiscount':
                                                    content.innerHTML = `
                                                        <p class="questions">Is it possible for you to share these expenses with someone else?</p>
                                                        <button class="qButton" onclick="navigate('extraCost concert noDiscount payBack')">Yes</button>
                                                        <button class="qButton" onclick="navigate('extraCost concert noDiscount noPayBack')">No</button>
                                                    `;
                                                    break;

                                                            case 'extraCost concert noDiscount payBack':
                                                            content.innerHTML = `
                                                                <p>Go for it!</p>
                                                                `;
                                                            break;

                                                            case 'extraCost concert noDiscount noPayBack':
                                                            content.innerHTML = `
                                                                <p>Don't buy (this time)</p>
                                                            `;
                                                            break;

                                            case 'noExtraCost concert expensive':
                                            content.innerHTML = `
                                                <p>Is it possible to go to this concert again soon? (Within a year?)</p>
                                                <button class="qButton" onclick="navigate('noExtraCost concert expensive SAME')">Yes</button>
                                                <button class="qButton" onclick="navigate('noExtraCost concert expensive SAME')">No</button>
                                            `;
                                            break;
                                            
                                                    case 'noExtraCost concert expensive SAME':
                                                    content.innerHTML = `
                                                        <p>Go for it!</p>
                                                    `;
                                                    break;
                                                    
                                    
                                case 'cheap concert':
                                    content.innerHTML = `
                                        <p class="questions">Are there extra costs involved?</p>
                                        <button class="qButton" onclick="navigate('extraCost concert cheap')">Yes</button>
                                        <button class="qButton" onclick="navigate('noExtraCost concert cheap')">No</button>
                                    `;
                                    break;

                                        case 'extraCost concert cheap':
                                        content.innerHTML = `
                                            <p class="questions">Is it possible for you to share these expenses with someone else?</p>
                                            <button class="qButton" onclick="navigate('extraCost concert cheap share')">Yes</button>
                                            <button class="qButton" onclick="navigate('extraCost concert cheap noShare')">No</button>
                                        `;

                                        case 'noExtraCost concert cheap':
                                        content.innerHTML = `
                                            <p>Go for it!</p>
                                        `;

                                        break;

                                                case 'extraCost concert cheap share':
                                                content.innerHTML = `
                                                    <p>Go for it!</p>
                                                `;
                                                break;

                                                case 'extraCost concert cheap noShare':
                                                content.innerHTML = `
                                                    <p class="questions">Do you have a discount for at least 20% off available?</p>
                                                    <button class="qButton" onclick="navigate('extraCost concert cheap noShare discount')">Yes</button>
                                                    <button class="qButton" onclick="navigate('extraCost concert cheap noShare noDiscount')">No</button>
                                                `;

                                                        case 'extraCost concert cheap noShare discount':
                                                        content.innerHTML = `
                                                            <p>Go for it!</p>
                                                        `;
                                                        break;

                                                        case 'extraCost concert cheap noShare noDiscount':
                                                            content.innerHTML = `
                                                            <p>Don't buy (this time)</p>
                                                        `;
                                                        break;

                        case 'nImportant concert':
                            content.innerHTML = `
                            <p>Fuck jabba</p>
                            `;
                            break;

        default:
            content.innerHTML = `
                <button class="qButton" onclick="navigate('concert')">Concert</button>
            `;
    }
}