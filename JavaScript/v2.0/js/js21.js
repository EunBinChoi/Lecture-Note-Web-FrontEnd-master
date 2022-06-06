/*
    regex (regular expression, 정규 표현식)
    : 입력 데이터가 우리가 정한 형식 (정규 표현식)에 일치를 하는지 확인하는 식
    : 특정 패턴의 문자열 확인하기 위한 표현 방식
    
    ex) 010-1234-5678, aaa@naver.com, aaa@naver.co.kr

    /패턴/플래그

    패턴
    =========================================
    a-zA-Z: 영어 알파벳
    ㄱ-ㅎ가-힣: 한국 문자
    0-9: 숫자
    .: 모든 문자열
    \d: 숫자
    \D: 숫자가 아닌 것
    \w: 영어 알파벳, 숫자, _
    \W: \w가 아닌 것
    \s: space
    \S: space가 아닌 것

    검색 패턴
    =========================================
    |: OR
    []: 괄호 안의 문자들 중 하나
    [^문자]: 괄호 안의 문자를 제외한 것
    ^문자열: 특정 문자열 시작
    문자열$: 특정 문자열로 끝남

    갯수 패턴
    =========================================
    ?: 없거나 한개
    *: 없거나 있거나
    +: 최소 한개
    {n}: n개
    {Min,}: 최소 Min개 이상
    {Min, Max}: Min <=  <= Max

    플래그
    =========================================
    g: global (모든 문자 검색, 안쓰면 매칭되는 첫 문자열 검색)
    i: ignore case (대소문자 구분 X)
    m: multi line (여러 행의 문자열 검색)

    함수
    =========================================
    (regex).test("string"): 문자열이 regex에 맞는지 확인 (true, false)
    ("string").match(regex): 문자열에서 regex에 해당되는 항목을 배열 반환
    ("string").search(regex): 문자열에서 regex에 해당되는 index 반환 (없으면 -1)


    ex) /\d{3}-\d{4}-\d{4}/g;

    "your phone number is 010-1234-5678, 010-0000-0000"

    online builder: https://regexr.com/, https://regex101.com/

*/

function isValidForm(formName) {
    if (!(isValidName(document.forms[formName]["name"].value))) {
        document.forms[formName]["name"].focus();
        return false;
    }
    else if (!(isValidID(document.forms[formName]["id"].value))) {
        document.forms[formName]["id"].focus();
        return false;
    }
    else if (!(isValidPass(document.forms[formName]["password"].value))) {
        document.forms[formName]["password"].focus();
        return false;
    }
    else if (!(isValidEmail(document.forms[formName]["email"].value))) {
        document.forms[formName]["email"].focus();
        return false;
    }
    else if (!(isValidLocation(document.forms[formName]["location"].value))) {
        document.forms[formName]["location"].focus();
        return false;
    }
    return true;

}

function isValidName(name) {
    // 조건
    // 1) 이름을 무조건 입력
    if (name == "") { alert("NAME must be filled out"); return false; }
    return true;
}

function isValidID(id) {
    // 조건
    // 1) 아이디를 무조건 입력
    // 2) 아이디는 영문자로 시작
    // 3) 아이디는 3글자 이상
    if (id == "") { alert("ID must be filled out"); return false; }
    // else if (!(id.charAt(0) >= "a" && id.charAt(0) <= "z" || id.charAt(0) >= "A" && id.charAt(0) <= "Z")) { alert("ID must be started with alphabet"); return false; }
    // else if (id.length < 3) { alert("ID must be at least 3 letters long"); return false; }
    else if(!(/^[a-zA-Z]\w{2,}$/g.test(id))) {
        alert("ID mismatch regex!"); 
        return false;
    }
    return true;
}

function isValidPass(pass) {
    // 조건
    // 1) 비밀번호를 무조건 입력
    // 2) 8 <=  <= 16 자리 사이
    // 3) 대문자와 특수문자를 무조건 하나씩 포함 
    if (pass == "") { alert("PASSWORD must be filled out"); return false; }
    // else if (!(pass.length >= 8 && pass.length <= 16)) { alert("PASSWORD must be 8 ~ 16 letters long"); return false; }

    // const mustCapital = ["A", "Z"];
    // const mustSpecial = [[33, 47], [58, 64], [91, 96], [123, 126]];
    // let countCapital = 0;
    // let countSpecial = 0;
    // for (let i = 0; i < pass.length; i++) {
    //     if (pass.charAt(i) >= mustCapital[0] && pass.charAt(i) <= mustCapital[1]) {
    //         countCapital++;
    //     }

    //     for (let j = 0; j < mustSpecial.length; j++) {
    //         if (pass.charCodeAt(i) >= mustSpecial[j][0] && pass.charCodeAt(i) <= mustSpecial[j][1]) {
    //             countSpecial++;
    //         }
    //     }
    //     // if(pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47 
    //     // || pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <= 64 
    //     // || pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <= 96 
    //     // || pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) <= 126)
    // }

    // if (!(countCapital > 0 && countSpecial > 0)) { alert("PASSWORD must include one capital and one special character"); return false; }
    else if(!(/(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/g.test(pass))) {
        alert("PASSWORD mismatch regex!");
        return false;
    }
    
    return true;

}

function isValidEmail(email) {
    // 조건
    // 1) 이메일이 무조건 입력
    // 2) 이메일에 @가 포함
    if (email == "") { alert("EMAIL must be filled out"); return false; }
    // else if (email.indexOf('@') == -1) { alert("EMAIL must has @ letter"); return false; }
    else if(!(/^[A-Za-z0-9\-\_\.]+\@[A-Za-z0-9\-]+(\.[A-Za-z]{2,3}){1,2}$/g.test(email))) {
        alert("EMAIL mismatch regex!");
        return false;
    }
    return true;
}

function isValidLocation(loc) {
    // 조건
    // 1) 위치 정보가 무조건 입력
    if (loc == "0") { alert("LOCATION must be selected"); return false; }
    return true;
}
