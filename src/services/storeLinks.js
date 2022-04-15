//  Buscar links salvos
export const getLinkSave = async key => {
    const mylinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(mylinks) || []

    return linksSaves;
}

// Salvar um link no LocalStorage
export const saveLink = async (key, newLink) => {
    let linksStored = await getLinkSave(key)

    //Verificar links existentes
    const hasLinks = linksStored.some(link => link.id === newLink.id)

    if(hasLinks) {
        console.log('Link existente');
        return;
    }

    //Adicionar new link
    linksStored.push(newLink)

    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link Salvos');
}

// Deletar link
export const deleteLink = async (links, id) =>{
    let myLinks = links.filter(item => item.id !== id);
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    return myLinks;
}