$(function () {
    $(".order-now").click(function (e) {
        e.preventDefault;
        alert('로그인 후 구매 가능합니다.')
    })
    $(".cancel-order").click(function (e) {
    
        $(".cartlist").html("<table><tr><th>선택</th><th>품목</th><th>품목명</th><th>수량</th><th>가격</th><th>배송비</th></tr></table><div class='total'><p>총 상품 가격 : 0 원 + 0원 (배송비) = 0원</p><button class='order-now'>주문 하기</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='cancel-order'>취소</button></div>");
    })

})