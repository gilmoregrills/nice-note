// Package p contains an HTTP Cloud Function.
package p

import (
    "encoding/json"
    "net/http"
    "io"
    "io/ioutil"
    "time"
    "fmt"
)

func Router(w http.ResponseWriter, r *http.Request) {
    body, err := ioutil.ReadAll(r.Body)
    if err != nil {
        fmt.Println(err)
    }

    stringBody := unmarshalRequest(body)

    response := marshalResponseString("fulfillment text wooo", "message text", stringBody)

    w.Header().Set("Content-Type", "application/json; charset=utf-8")
    io.WriteString(w, response)
}

type Request struct {
    ResponseId string `json:"responseId"`
    QueryResult QueryResult `json:"queryResult"`
    Session string `json:"session"`
}

type QueryResult struct {
    QueryText string
    Action string
    TimePeriod time.Time
    DatePeriod time.Time
    Keywords []string
}

func unmarshalRequest(requestBody []byte) string {
    return string(requestBody)
}

type Response struct {
    FulfillmentText string `json:"fulfillmentText"`
    FulfillmentMessages []Message `json:"fulfillmentMessages"`
    Source string `json:"source"`
}

type Message struct {
    Text Text `json:"text"`
}

type Text struct {
    Text []string `json:"text"`
}

func marshalResponseString(fulfillmentText string, message string, source string) string {
    response := Response{
        fulfillmentText,
        []Message{
            Message{
                Text{
                    []string{message},
                },
            },
        },
        source,
    }

    byteResponse, err := json.Marshal(response)
    if err != nil {
        fmt.Println(err)
    }

    return string(byteResponse)
}

