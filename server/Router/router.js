const router = require("express").Router();
const Product = require("../Model/Schema");


router.get("/", async (req, res) => {

    try {
        const displayedProducts = await Product.find();
        res.json(displayedProducts);
    } catch (error){
        res.status(501).send()
    }
});


router.post("/", async (req, res) => {
    try {
        const { key, img, title, description, price } = req.body;

        if (!key && !img && !title && !price) {
            return res.status(400).json({ errText: "required field is missing" });
        }

        const productData = new Product({
            key, img, title, description, price
        });
        const savedProductData = await productData.save()
        res.json(savedProductData);

    } catch (error){
        res.status(501).send()

    }
});


router.delete("/:id", async (req, res) => {
    try {
        const productId = req.params.id
        if (!productId)
            return res.status(500).json({ errText: "Sorry!! Incorrect product Id" });
        const availableProducts = await Product.findById(productId);
        if (!availableProducts)
            return res.status(404).json({ errText: "No Product was found" });
        await availableProducts.delete();
        res.json(availableProducts);

    } catch {
        res.status(500).send();
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { key, img, title, description, price } = req.body;
        const productId = req.params.id
        
        if (!title && !price)
            return res.status(500).json({ errText: "Sorry!! Required field is missing" });
        
        if (!productId)
            return res.status(500).json({ errText: "Sorry!! Incorrect product Id" });
        
        const oldProducts = await Product.findById(productId);

        if (!oldProducts)
            return res.status(404).json({ errText: "No Product was found" });
        
        oldProducts.key = key
        oldProducts.img = img;
        oldProducts.title = title;
        oldProducts.description = description;
        oldProducts.price = price;

        const editedProducts = await oldProducts.save();
        res.json(editedProducts);

    } catch {
        res.status(500).send();
    }
})

    
module.exports = router;


