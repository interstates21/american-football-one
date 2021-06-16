// Feature: Tree Gallery

// Feature: Planting and Growing Instructions
// Feature: Rating of keepers (who planted the most trees)
// Feature: Get a T-shirt for 10 trees
// Feature: Some tree type has some points (Pine tree is the most valuable tree)
// Feature: Map of the planted trees
// Feature: Quest: plant a tree
// Feature: User Login


const AVAILABLE_TYPES = {
    Apple: {
        imageURL: './trees/pic-2.jpg'
    },
    Cherry: {
     imageURL: './trees/pic-1.jpg'
    },
    Pine: {
     imageURL: './trees/pic-3.jpg'
    }
}

const TREES = [
    {
        treeName: "Sunny Bug",
        type: AVAILABLE_TYPES.Cherry,
        location: 'Sweden',
        keeper: 'Samuel',
    }
]

const renderTreeGallery = () => {
    const treeGaleryElement = document.getElementById('tree-gallery');

    
} 