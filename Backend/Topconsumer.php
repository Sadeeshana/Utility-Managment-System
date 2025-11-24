<?php
header('Content-Type: application/json');


require_once 'database.php';  

// Get parameters from query string
$utility_type = $_GET['utility_type'] ?? 'electricity';
$month        = $_GET['month'] ?? date('Y-m-01'); 
$search       = $_GET['search'] ?? '';
$limit        = intval($_GET['limit'] ?? 50);
$offset       = intval($_GET['offset'] ?? 0);

try {
    $query = "
        SELECT *
        FROM top_consumers_view
        WHERE Utility_Type = :utility_type
          AND Month = :month
          AND Customer_Name LIKE :search
        ORDER BY rank
        LIMIT :limit OFFSET :offset
    ";

    $stmt = $pdo->prepare($query);
    $stmt->bindValue(':utility_type', $utility_type);
    $stmt->bindValue(':month', $month);
    $stmt->bindValue(':search', "%$search%", PDO::PARAM_STR);
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);

    $stmt->execute();
    $results = $stmt->fetchAll();

    echo json_encode([
        'data' => $results,
        'count' => count($results)
    ]);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
