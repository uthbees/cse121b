const spellInfoDialog = document.getElementById('spellInfoDialog');
const spellInfoDialogContent = document.getElementById('dialogContents');
const spellLevelFilter = document.getElementById('spellLevelFilter');
const magicSchoolFilter = document.getElementById('magicSchoolFilter');

let allSpellsData = [];

document.getElementById('dialogCloseButton').addEventListener('click', () => {
    spellInfoDialog.close();
});

function updateSpellsHTMLList(newSpellsList) {
    const spellsListNode = document.getElementById('spellsList');
    spellsListNode.replaceChildren(...newSpellsList.map((spell) => {
        const spellNode = document.createElement('div');
        spellNode.classList.add('spellCard');
        spellNode.innerHTML = spell.name;
        spellNode.onclick = () => openSpellInfoDialog(`https://www.dnd5eapi.co${spell.url}`);
        return spellNode;
    }));
}

async function makeRequest(url) {
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    } else {
        alert('Network request failed!');
        console.log(response);
        throw new Error('Network request failed!');
    }
}

function constructQueryString(baseUrl, params) {
    if (params === undefined || params.length === 0) {
        return baseUrl;
    }
    return `${baseUrl}?${params.join('&')}`;
}

function formatParagraphs(paragraphs) {
    return `\n${paragraphs.join('\n\n')}`;
}

function formatYesOrNo(bool) {
    return bool ? 'Yes' : 'No';
}

function formatClassesList(classesList) {
    return classesList.map((nextClass) => nextClass.name).join(', ');
}

function capitalizeFirstLetter(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function itemIsMeaningfullyPresent(itemData) {
    if (itemData === undefined || (Array.isArray(itemData) && itemData.length === 0)) {
        return false;
    }
    return true;
}

const spellDisplayFormat = [
    { value: 'name', label: 'Spell name' },
    { value: 'desc', label: 'Description', format: formatParagraphs },
    { value: 'higher_level', label: 'Behavior at higher levels', format: formatParagraphs },
    { value: 'range', label: 'Range' },
    { value: 'components', label: 'Components', format: (components) => components.join(', ') },
    { value: 'material', label: 'Material components' },
    { value: 'area_of_effect', label: 'Area of effect', format: (data) => `${data.size}ft ${data.type}` },
    { value: 'ritual', label: 'Ritual', format: formatYesOrNo },
    { value: 'duration', label: 'Duration' },
    { value: 'concentration', label: 'Concentration', format: formatYesOrNo },
    { value: 'casting_time', label: 'Casting time' },
    { value: 'level', label: 'Spell level' },
    { value: 'attack_type', label: 'Attack type', format: capitalizeFirstLetter },
    { value: 'damage', label: 'Damage type', format: (data) => data.damage_type.name },
    { value: 'school', label: 'School of magic', format: (data) => data.name },
    { value: 'classes', label: 'Available for classes', format: formatClassesList },
    { value: 'subclasses', label: 'Available for subclasses', format: formatClassesList },
];

async function openSpellInfoDialog(spellDataURL) {
    spellInfoDialog.showModal();
    spellInfoDialogContent.innerHTML = 'Loading...';
    
    const spellData = await makeRequest(spellDataURL);
    spellInfoDialogContent.innerHTML = '';
    
    spellDisplayFormat.forEach((spellDisplayFormatItem) => {
        let spellDataItem = spellData[spellDisplayFormatItem.value];
        if (itemIsMeaningfullyPresent(spellDataItem)) {
            if (spellDisplayFormatItem.format) {
                spellDataItem = spellDisplayFormatItem.format(spellDataItem);
            }
            
            const dataItemHolder = document.createElement('div');
            dataItemHolder.className = 'spellDataItem';
            
            dataItemHolder.innerHTML = `<b>${spellDisplayFormatItem.label}:</b> ${spellDataItem}`;
            spellInfoDialogContent.append(dataItemHolder, document.createElement('br'));
        }
    });
}

async function updateSpells() {
    const levelFilterValue = spellLevelFilter.value;
    const schoolFilterValue = magicSchoolFilter.value;
    const filterParams = [];
    
    if (levelFilterValue !== 'all') {
        filterParams.push(`level=${levelFilterValue}`);
    }
    if (schoolFilterValue !== 'all') {
        filterParams.push(`school=${schoolFilterValue}`);
    }
    
    const requestUrl = constructQueryString('https://www.dnd5eapi.co/api/spells', filterParams);
    
    allSpellsData = (await makeRequest(requestUrl)).results;
    updateSpellsHTMLList(allSpellsData);
}

updateSpells();
