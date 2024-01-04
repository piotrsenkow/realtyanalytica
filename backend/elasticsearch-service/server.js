const express = require('express');
const { Client } = require('@elastic/elasticsearch'); // Import Elasticsearch client
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

// Create an Elasticsearch client instance
const client = new Client({ node: 'http://localhost:9200' });

// Route to handle search requests
app.get('/search', (req, res) => {
    const searchText = req.query.full_address; // Get the search text from the query parameter

    client.search({
        index: 'real_estate_listing_addresses',
        body: {
            query: {
                match: {
                    full_address: searchText
                }
            }
        }
    }).then(esResponse => {
        const hits = esResponse.hits.hits;

        if (hits && hits.length > 0) {
            // Remove duplicate addresses and preserve associated data
            const uniqueAddresses = Array.from(new Map(hits.map(hit => [hit._source.full_address, hit])).values());
            res.json(uniqueAddresses.map(hit => hit._source));
        } else {
            res.status(404).send("No results found");
        }
    }).catch(err => {
        console.error("Error during Elasticsearch query:", err);
        res.status(500).send("Error querying Elasticsearch");
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
