import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    // هنا يمكنك جلب البيانات من API أو تصفية مصفوفة محلية
    const fetchResults = async () => {
      try {
        // محاكاة جلب البيانات من API
        // const response = await fetch(`/api/search?q=${query}`);
        // const data = await response.json();
        
        // مثال ببيانات وهمية:
        const mockProducts = [
          { id: 1, name: "T-Shirt", price: "$20", image: "tshirt.jpg" },
          { id: 2, name: "Jeans", price: "$45", image: "jeans.jpg" }
        ];
        
        const filtered = mockProducts.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setResults(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [location.search]);

  return (
    <Container className="search-results-page">
    <h2 className="results-title">
      نتائج البحث عن: "{new URLSearchParams(location.search).get("q")}"
    </h2>

    {loading ? (
      <div className="loading-spinner">جاري التحميل...</div>
    ) : results.length > 0 ? (
      <Row>
        {results.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card h-100">
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-danger fw-bold">
                  {product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    ) : (
      <div className="no-results">
        <p>لا توجد منتجات مطابقة للبحث</p>
      </div>
    )}
  </Container>
);

};

export default SearchResults;